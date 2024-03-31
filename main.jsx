import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

async function main() {
    const rootEl = document.getElementById("app");
    const root = createRoot(rootEl);
    root.render(<App />);
}

await main();