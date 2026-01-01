import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Camas from "./pages/Camas";
import DosHermanas from "./pages/DosHermanas";
import LosRemedios from "./pages/LosRemedios";
import SevillaEste from "./pages/SevillaEste";
import Triana from "./pages/Triana";
import Inicio from "./pages/inicio";

import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/triana", element: <Triana /> },
      { path: "/camas", element: <Camas /> },
      { path: "/dos-hermanas", element: <DosHermanas /> },
      { path: "/los-remedios", element: <LosRemedios /> },
      { path: "/sevilla-este", element: <SevillaEste /> },

      // Páginas legales
      { path: "/aviso-legal", element: <AvisoLegal /> },
      { path: "/privacidad", element: <Privacidad /> },
    ],
  },
]);

export default router;