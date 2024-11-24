import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Memorize } from "./components/memos/Memorize.jsx";
//import { MultiplesCustomHook } from "./components/useFetch/MultiplesCustomHook.jsx";
//import { FocusScreen } from "./components/04-useRef/FocusScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Memorize />
  </StrictMode>
);
