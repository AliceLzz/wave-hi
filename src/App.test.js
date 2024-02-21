import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render the landing page", () => {
    render(<App />);
    const TextonScreen = screen.getByText(/WAVE/i);
    expect(TextonScreen).toBeInTheDocument();
});
test("Render the landing page", () => {
    render(<App />);
    const TextonScreen2 = screen.getByText(/-Hi/i);
    expect(TextonScreen2).toBeInTheDocument();
});
