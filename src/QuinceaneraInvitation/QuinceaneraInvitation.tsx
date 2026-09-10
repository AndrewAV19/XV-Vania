import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Fade,
  Grow,
  Zoom,
  Modal,
  Backdrop,
  Chip,
} from "@mui/material";
import {
  ChevronLeft as LeftIcon,
  Close as CloseIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";
import AttendanceForm from "../components/AttendanceForm/AttendanceForm";
import GiftsSection from "../components/Giftssection/Giftseciont";
import LocationSection from "../components/Locationsection/Locationsection";
import InvitationContent from "../components/InvitationContent/InvitationContent";

interface TimelineEvent {
  time: string;
  event: string;
  description: string;
  icon: React.ElementType;
}

interface QuinceaneraInvitationProps {
  quinceanera?: string;
  apellidos?: string;
  fecha?: string;
  hora?: string;
  lugar?: string;
  direccion?: string;
  mensaje?: string;
  historia?: string;
  fotos?: string[];
  codigoVestimenta?: string;
  frasePersonal?: string;
  coordenadasGPS?: {
    lat: number;
    lng: number;
  };
  codigoDresscode?: string;
  notasAdicionales?: string;
  horarioEventos?: TimelineEvent[];
  padrinos?: string[];
  padres?: string[];
  colores?: string[];
  horaMisa?: string;
  fechaEvento?: string;
}

const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Pinyon+Script&family=Great+Vibes&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 15%, rgba(255,255,255,0.6), transparent 28%),
    radial-gradient(circle at 85% 70%, rgba(255,255,255,0.45), transparent 30%),
    linear-gradient(145deg, #eab8c4 0%, #f2cbd3 45%, #dfabb9 100%);
}

::selection {
  background: #c78494;
  color: #fff;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(130, 72, 88, 0.35);
  border-radius: 10px;
}

@keyframes floralFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-7px) rotate(1deg);
  }
}

@keyframes softPulse {
  0%, 100% {
    opacity: 0.65;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.15;
  }
}

.invitation-reveal {
  animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.invitation-delay-1 {
  animation-delay: 0.15s;
}

.invitation-delay-2 {
  animation-delay: 0.3s;
}

.invitation-delay-3 {
  animation-delay: 0.45s;
}

.invitation-delay-4 {
  animation-delay: 0.6s;
}

.floral-animation {
  animation: floralFloat 5s ease-in-out infinite;
}

.soft-pulse {
  animation: softPulse 3s ease-in-out infinite;
}

@media (max-width: 600px) {
  body {
    background: linear-gradient(145deg, #efc2cc 0%, #e7b4c0 100%);
  }
}
`;

export const QuinceaneraInvitation: React.FC<QuinceaneraInvitationProps> = ({
  quinceanera = "Vania",
  apellidos = "Jiménez Alonso",
  lugar = "Salón de Eventos",
  direccion = "Av. Principal #123",
  frasePersonal = "Un sueño que comienza, una historia que continúa.",
  coordenadasGPS = {
    lat: 20.301798,
    lng: -102.539874,
  },
  notasAdicionales = "Será un honor contar contigo en este día tan especial.",
  padres = ["Tania Alonso Ramírez", "Israel Jiménez Paulino"],
  padrinos = ["Laura Alonso Diaz", "Ventzislav Tzvetkov"],
  fotos = [],
  fechaEvento = "2027-03-27T17:00:00",
}) => {
  const [activeSection, setActiveSection] = useState<
    "invitation" | "history" | "details" | "location"
  >("invitation");

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeSection]);

  const T = {
    background: "#edc1ca",
    paper: "#fff9f7",
    paperSoft: "#fdf0f2",
    paperPink: "#f8dfe5",
    rose: "#bd7484",
    roseDark: "#984f62",
    roseSoft: "#dba1ad",
    roseVerySoft: "#f2cbd2",
    gold: "#b99a61",
    goldLight: "#d3bb89",
    text: "#704d54",
    textDark: "#563b41",
    border: "rgba(164,100,116,0.32)",
    shadow: "rgba(91,45,57,0.2)",
  };

  const scriptFont = {
    fontFamily: "'Pinyon Script', cursive",
  };

  const serifFont = {
    fontFamily: "'Cormorant Garamond', serif",
  };

  const renderInvitation = () => (
    <Grow in timeout={900}>
      <Box>
        <InvitationContent
          quinceanera={quinceanera}
          apellidos={apellidos}
          frasePersonal={frasePersonal}
          fotos={fotos}
          padres={padres}
          padrinos={padrinos}
          notasAdicionales={notasAdicionales}
          fechaEvento={fechaEvento}
          onOpenModal={() => setOpenModal(true)}
        />
      </Box>
    </Grow>
  );

  return (
    <>
      <style>{globalStyles}</style>

      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: `
            radial-gradient(
              circle at 20% 20%,
              rgba(255,255,255,0.35),
              transparent 28%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(255,255,255,0.25),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #e9b9c4 0%,
              #f1c9d1 50%,
              #dfaeba 100%
            )
          `,
        }}
      />

      {activeSection !== "invitation" && (
        <Zoom in>
          <IconButton
            onClick={() => setActiveSection("invitation")}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1000,
              background: "linear-gradient(135deg, #b99a61 0%, #947440 100%)",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(90,55,25,0.3)",
              "&:hover": {
                transform: "scale(1.08)",
                background: "linear-gradient(135deg, #c4a56d 0%, #85672f 100%)",
              },
              transition: "all .3s ease",
            }}
          >
            <LeftIcon />
          </IconButton>
        </Zoom>
      )}

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {activeSection === "invitation" && renderInvitation()}

        {activeSection === "details" && (
          <Container maxWidth="md" sx={{ py: 4 }}>
            <GiftsSection />
          </Container>
        )}

        {activeSection === "location" && (
          <Container maxWidth="md" sx={{ py: 4 }}>
            <LocationSection
              lugar={lugar}
              direccion={direccion}
              coordenadasGPS={coordenadasGPS}
            />
          </Container>
        )}
      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backdropFilter: "blur(8px)",
              background: "rgba(70,35,45,0.55)",
            },
          },
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: { xs: "94%", sm: 500 },
              maxHeight: "90vh",
              overflow: "auto",
              outline: "none",
              background: "linear-gradient(160deg, #fffaf8 0%, #fbecef 100%)",
              borderRadius: "22px",
              boxShadow: "0 35px 75px rgba(70,30,42,0.3)",
              p: { xs: 3, sm: 4 },
            }}
          >
            <IconButton
              onClick={() => setOpenModal(false)}
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
                zIndex: 5,
                color: T.text,
                "&:hover": {
                  color: T.roseDark,
                  transform: "rotate(90deg)",
                },
                transition: "all .3s ease",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  width: 62,
                  height: 62,
                  mx: "auto",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff8f6",
                  mb: 1.5,
                }}
              >
                <ConfirmationNumberIcon
                  sx={{
                    color: T.gold,
                    fontSize: 30,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  ...scriptFont,
                  color: T.roseDark,
                  fontSize: 48,
                  lineHeight: 1,
                }}
              >
                Confirma tu asistencia
              </Typography>

              <Typography
                sx={{
                  ...serifFont,
                  color: T.text,
                  fontSize: 15,
                  mt: 1.5,
                  lineHeight: 1.7,
                }}
              >
                ¡Acompáñanos en la celebración de los XV años de {quinceanera}!
              </Typography>

              <Chip
                label={`♡ ${quinceanera} ♡`}
                sx={{
                  mt: 2,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  color: T.roseDark,
                  background: "#f8dfe5",
                }}
              />
            </Box>

            <Box sx={{ position: "relative", zIndex: 2, mt: 2 }}>
              <AttendanceForm
                novio=""
                novia={quinceanera}
                onClose={() => setOpenModal(false)}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default QuinceaneraInvitation;