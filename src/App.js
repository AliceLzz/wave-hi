import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MainContainer } from "./components/MainContainer";
import { AppContainer } from "./components/AppContainer";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Chat } from "./components/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { socket } from "./socket";

function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState(null);
    const [friendsListObj, setFriendsListObj] = useState({});
    const [currentChat, setCurrentChat] = useState("");

    useEffect(() => {
        socket.on("connect", () => {
            setIsConnected(true);
        });
        socket.on("disconnect", () => {
            setIsConnected(false);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);

    useEffect(() => {
        socket.on("post", (posts) => {
            setPosts(posts);
        });

        socket.on("newPost", (posts) => {
            setPosts(posts);
        });

        return () => {
            socket.off("post");
            socket.off("newPost");
        };
    }, [posts]);

    useEffect(() => {
        //Socket function to receive friend list availables upon connection
        socket.on("users", (users) => {
            const list = {};
            users.forEach((user) => {
                if (user.userID === socket.id) {
                    user.self = true;
                    setUser(user.username);
                }
                list[user.userID] = user;
            });
            setFriendsListObj(list);
        });

        //Socket function to handle if you have two session active or if the password is wrong
        socket.on("connect_error", (err) => {
            if (err.message === "invalid username") {
                alert(
                    "Something is wrong with your User or Password, please try again"
                );
                console.log("You already have an open session");
            }
        });

        //Socket function to update friends list with a new user
        socket.on("user_connected", (user) => {
            setFriendsListObj((prev) => {
                return { ...prev, [user.userID]: user };
            });
        });

        //Socket function to remove an user from the friend list availables
        socket.on("user_disconnected", (user) => {
            let friendsList = { ...friendsListObj };
            delete friendsList[user.userID];
            setFriendsListObj(friendsList);
            if (user.userID === currentChat) {
                setCurrentChat("");
            }
        });
        //Socket function to receive private message
        socket.on("private_message", ({ content, from }) => {
            let user = friendsListObj[from];

            if (user.hasOwnProperty("messages")) {
                user.messages.push({ content, fromSelf: false });
            } else {
                user.messages = [];
                user.messages.push({ content, fromSelf: false });
            }
            if (from !== currentChat) {
                user.hasNewMessages = true;
            }
            setFriendsListObj({ ...friendsListObj, [from]: user });
        });
        return () => {
            socket.off("users");
            socket.off("connect_error");
            socket.off("user_connected");
            socket.off("user_disconnected");
            socket.off("private_message");
        };
    }, [friendsListObj]);

    function handleLogin(obj) {
        socket.auth = obj;
        socket.connect();
    }

    function handlecurrentChat(chatId) {
        setCurrentChat(chatId);
        friendsListObj[chatId].hasNewMessages = false;
    }
    function handleSendMsj(msj) {
        let user = friendsListObj[currentChat];
        if (user.hasOwnProperty("messages")) {
            user.messages.push({ content: msj, fromSelf: true });
        } else {
            user.messages = [];
            user.messages.push({ content: msj, fromSelf: true });
        }
        setFriendsListObj({ ...friendsListObj, [currentChat]: user });
        socket.emit("private_message", {
            content: msj,
            to: currentChat,
        });
    }
    function handleSendPost(formData) {
        fetch("https://mtk5jvf5-5000.usw2.devtunnels.ms/post", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                alert("Success");
            })
            .catch((error) => {
                console.log("Somethig is wrong with server", error);
            });
    }

    // This is to create the router tree and to know which component we need to render
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainContainer />,
            errorElement: <div>Not found</div>,
            children: [
                { index: true, element: <Landing /> },
                {
                    path: "login",
                    element: <Login handleLogin={handleLogin} user={user} />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "wave-hi",
                    element: (
                        <AppContainer
                            users={friendsListObj}
                            userName={user}
                            handleSendPost={handleSendPost}
                        />
                    ),
                    children: [
                        { index: true, element: <Home posts={posts} /> },
                        {
                            path: "profile",
                            element: <Profile />,
                        },
                        {
                            path: "search",
                            element: <Search />,
                        },
                        {
                            path: "chat",
                            element: (
                                <Chat
                                    friendsListObj={friendsListObj}
                                    handlecurrentChat={handlecurrentChat}
                                    handleSendMsj={handleSendMsj}
                                    userChat={friendsListObj[currentChat]}
                                    setCurrentChat={setCurrentChat}
                                />
                            ),
                        },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
