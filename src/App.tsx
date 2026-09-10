import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Fade } from "@mui/material";

import { useState } from "react";
import EnvelopeOpening from "./components/EnvelopeOpening/EnvelopeOpening";
import QuinceaneraInvitation from "./QuinceaneraInvitation/QuinceaneraInvitation";


// Tema personalizado para los XV años de Vania
const quinceaneraTheme = createTheme({
  palette: {
    primary: {
      main: "#d4a0c0", // Rosa empolvado
      light: "#e8c8d8",
      dark: "#b880a0",
    },
    secondary: {
      main: "#c75a7a", // Rosa más intenso
      light: "#dba1aa",
      dark: "#8a3a5a",
    },
    info: {
      main: "#b8a0b8", // Lila suave
    },
    background: {
      default: "#fdf5f0", // Fondo cálido
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
    },
  },
});

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleOpenInvitation = () => {
    // Primero hacemos fade out del sobre
    setFadeOut(true);

    // Luego mostramos la invitación
    setTimeout(() => {
      setShowInvitation(true);
    }, 1000);
  };

  return (
    <ThemeProvider theme={quinceaneraTheme}> {/* ← Cambio: tema de XV */}
      <CssBaseline />
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
        {/* Efecto de sobre (solo se muestra si no se ha abierto la invitación) */}
        {!showInvitation && (
          <Fade in={!fadeOut} timeout={1000} unmountOnExit>
            <Box>
              <EnvelopeOpening onOpen={handleOpenInvitation} />
            </Box>
          </Fade>
        )}

        {/* Invitación de XV años de Vania (se muestra después de abrir el sobre) */}
        {showInvitation && (
          <Fade in={true} timeout={1500}>
            <Box>
              <QuinceaneraInvitation
                quinceanera="Vania"
                fecha="Sábado, 27 de Marzo 2027"
                hora="7:00 PM"
                horaMisa="6:00 PM"
                lugar="Salón de Eventos Los Jardines"
                direccion="Av. Principal #123, Col. Centro"
                mensaje="Con la bendición de Dios y el amor de mis padres, celebro mis XV años y quiero compartir esta alegría contigo."
                codigoVestimenta="Gala / Formal"
                codigoDresscode="Vestimenta formal - Colores pastel"
                frasePersonal="Y en cada paso, una estrella; en cada sueño, un camino"
                notasAdicionales="Te esperamos con los brazos abiertos para compartir esta noche inolvidable"
                padrinos={["Tania Alonso Ramírez", "Israel Jiménez Paulino"]}
                madrinas={["Laura Alonso Diaz", "Ventzislav Tzvetkov"]}
                colores={["#f4a6c4", "#e8a0c0", "#d4a0c0"]}
                coordenadasGPS={{ lat: 20.301798, lng: -102.539874 }}
              />
            </Box>
          </Fade>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;