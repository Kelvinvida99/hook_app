import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormHook } from "./components/useEffect/FormCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormHook />
  </StrictMode>
);
