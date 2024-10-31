import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion.jsx";
import Registrarse from "./pages/Registrarse.jsx";
import Matematicas from "./pages/Matematicas.jsx";
import SumasyRestas from "./pages/SumasyRestas.jsx";
import Fracciones from "./pages/Fracciones.jsx";
import Geometria from "./pages/Geometria.jsx";
import Aprendizaje from "./pages/Aprendizaje.jsx";
import Ciencias from "./pages/Ciencias.jsx";
import Lec1SumRes from "./Quiz/Leccion1SumRes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/InicioSesion",
    element: <InicioSesion />,
  },
  {
    path: "/Registro",
    element: <Registrarse />,
  },
  {
    path: "/Matematicas",
    element: <Matematicas />,
  },
  {
    path: "/Ciencias",
    element: <Ciencias />,
  },
  {
    path: "/SumasyRestas",
    element: <SumasyRestas />,
  },
  {
    path: "/Fracciones",
    element: <Fracciones />,
  },
  {
    path: "/Geometria",
    element: <Geometria />,
  },
  {
    path: "/AprendizajeGeneral",
    element: <Aprendizaje />,
  },
  {
    path: "/Leccion1SumasyRestas",
    element: <Lec1SumRes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
