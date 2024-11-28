import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./components/09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css"
//import { Padre } from "./components/07-tarea-memo/Padre.jsx";
//import { CallBackHook } from "./components/memos/CallBackHook.jsx";
//import { MemoHook } from "./components/memos/MemoHook.jsx";
//import { Memorize } from "./components/memos/Memorize.jsx";
//import { MultiplesCustomHook } from "./components/useFetch/MultiplesCustomHook.jsx";
//import { FocusScreen } from "./components/04-useRef/FocusScreen.jsx";
//import "./components/08-useReducer/intro-reducer"
//import { TodoApp } from "./components/08-useReducer/TodoApp";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <MainPage />
    </StrictMode>
  </BrowserRouter>
);
