import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import App2 from "./App2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <App2 />
  </StrictMode>
);