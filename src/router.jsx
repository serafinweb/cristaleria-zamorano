import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Páginas estándar
import Inicio from "./pages/index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/contacto";
import SobreNosotros from "./pages/sobre-nosotros";
import AvisoLegal from "./pages/aviso-legal";
import PoliticaPrivacidad from "./pages/politica-de-privacidad";
import PoliticaCookies from "./pages/politica-de-cookies";

// Zonas tradicionales
import Camas from "./pages/Camas";
import DosHermanas from "./pages/dos-hermanas";
import LosRemedios from "./pages/los-remedios";
import SevillaEste from "./pages/sevilla-este";
import Triana from "./pages/Triana";

// Zonas nuevas
import Nervion from "./pages/nervion";
import LaMacarena from "./pages/la-macarena";
import SanBernardo from "./pages/san-bernardo";
import LosBermejales from "./pages/los-bermejales";
import Bellavista from "./pages/bellavista";
import Tomares from "./pages/tomares";
import MairenaDelAljarafe from "./pages/mairena-del-aljarafe";
import Bormujos from "./pages/bormujos";
import SanJuan from "./pages/san-juan";
import AlcalaDeGuadaira from "./pages/alcala-de-guadaira";

// Error 404
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Inicio /> },
      
      // Páginas principales
      { path: "/servicios", element: <Servicios /> },
      { path: "/contacto", element: <Contacto /> },
      { path: "/sobre-nosotros", element: <SobreNosotros /> },
      
      // Páginas legales
      { path: "/aviso-legal", element: <AvisoLegal /> },
      { path: "/politica-de-privacidad", element: <PoliticaPrivacidad /> },
      { path: "/politica-de-cookies", element: <PoliticaCookies /> },

      // Zonas tradicionales
      { path: "/camas", element: <Camas /> },
      { path: "/dos-hermanas", element: <DosHermanas /> },
      { path: "/los-remedios", element: <LosRemedios /> },
      { path: "/sevilla-este", element: <SevillaEste /> },
      { path: "/triana", element: <Triana /> },

      // Zonas nuevas
      { path: "/nervion", element: <Nervion /> },
      { path: "/la-macarena", element: <LaMacarena /> },
      { path: "/san-bernardo", element: <SanBernardo /> },
      { path: "/los-bermejales", element: <LosBermejales /> },
      { path: "/bellavista", element: <Bellavista /> },
      { path: "/tomares", element: <Tomares /> },
      { path: "/mairena-del-aljarafe", element: <MairenaDelAljarafe /> },
      { path: "/bormujos", element: <Bormujos /> },
      { path: "/san-juan", element: <SanJuan /> },
      { path: "/alcala-de-guadaira", element: <AlcalaDeGuadaira /> },

      // Ruta comodín para 404
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;