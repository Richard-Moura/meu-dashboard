// Importa o React e o ReactDOM para renderizar a aplicação na página.
import React from "react";
import ReactDOM from "react-dom/client";

// Importa o componente principal App.
import App from "./App";

// Importa o arquivo CSS global.
import "./index.css";

// Renderiza o App dentro da div com id="root" no index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
