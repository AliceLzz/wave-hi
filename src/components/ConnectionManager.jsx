import React from "react";
import { socket } from "../socket";

export function ConnectionManager() {
    function connect() {
        socket.connect();
    }

    function disconnect() {
        socket.disconnect();
    }

    return (
        <>
            <button onClick={connect} className="border text-white">
                Connect
            </button>
            <button onClick={disconnect} className="border text-white">
                Disconnect
            </button>
        </>
    );
}
