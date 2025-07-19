import React from "react";
import{ createRoot } from "react-dom/client";
import Main from "./Main;
import "./index.css";


const root= createRoot(document.getElementById("root"));
root.render(
  <>
  <Main />
  </>
)