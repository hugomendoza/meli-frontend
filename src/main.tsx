import React from "react";
import ReactDOM from "react-dom/client";

import { MeliApp } from "./MeliApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MeliApp />
  </React.StrictMode>
)
