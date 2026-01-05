import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Camas from "./pages/Camas";
import DosHermanas from "./pages/DosHermanas";
import LosRemedios from "./pages/LosRemedios";
import SevillaEste from "./pages/SevillaEste";
import Triana from "./pages/Triana";
import Inicio from "./pages/Inicio";

import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";

import Servicios from "./pages/Servicios";

// 👉 IMPORTA LA NUEVA PÁGINA 404
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    // 👉 ESTA LÍNEA ES LA CLAVE
    errorElement: <Error404 />,

    children: [
      { path: "/", element: <Inicio /> },
      { path: "/triana", element: <Triana /> },
      { path: "/camas", element: <Camas /> },
      { path: "/dos-hermanas", element: <DosHermanas /> },
      { path: "/los-remedios", element: <LosRemedios /> },
      { path: "/sevilla-este", element: <SevillaEste /> },

      { path: "/servicios", element: <Servicios /> },

      { path: "/aviso-legal", element: <AvisoLegal /> },
      { path: "/privacidad", element: <Privacidad /> },

      // 👉 OPCIONAL: ruta comodín adicional (no necesaria, pero no molesta)
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;