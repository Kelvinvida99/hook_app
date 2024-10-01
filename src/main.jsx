import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MultiplesCustomHook } from "./components/useFetch/MultiplesCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MultiplesCustomHook />
  </StrictMode>
);
