import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SimpleForm } from "./components/useEffect/02-useEffect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SimpleForm />
  </StrictMode>
);
