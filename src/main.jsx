import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import "./Error.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
