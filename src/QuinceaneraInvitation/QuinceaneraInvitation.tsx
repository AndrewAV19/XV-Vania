import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Fade,
  Grow,
  Zoom,
  Modal,
  Backdrop,
  Chip,
  Stack,
} from "@mui/material";
import {
  ChevronLeft as LeftIcon,
  Close as CloseIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  MusicNote as MusicNoteIcon,
} from "@mui/icons-material";

import HistorySection from "../components/HistorySection/HistorySection";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import AttendanceForm from "../components/AttendanceForm/AttendanceForm";
import GiftsSection from "../components/Giftssection/Giftseciont";
import LocationSection from "../components/Locationsection/Locationsection";
import { Countdown } from "../components/Designs/Countdown";
import { PhotoStrip } from "../components/Designs/PhotoStrip";
import { EnvelopeIllustration } from "../components/Designs/EnvelopeIllustration";
import { CoupleIllustration } from "../components/Designs/CoupleIllustration";
import { CupsIllustration } from "../components/Designs/CupsIllustration";
import ParentsAndGodparents from "../components/Designs/ParentsAndGodparents";

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
  madrinas?: string[];
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
  historia = "Hace quince años llegaste al mundo para llenarlo de luz, alegría y amor. Hoy queremos celebrar contigo esta etapa tan especial.",
  codigoVestimenta = "Gala / Formal",
  frasePersonal = "Un sueño que comienza, una historia que continúa.",
  coordenadasGPS = {
    lat: 20.301798,
    lng: -102.539874,
  },
  notasAdicionales = "Será un honor contar contigo en este día tan especial.",
  padrinos = ["Tania Alonso Ramírez", "Israel Jiménez Paulino"],
  madrinas = ["Laura Alonso Diaz", "Ventzislav Tzvetkov"],
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            minHeight: "100vh",
            background: `
              linear-gradient(
                180deg,
                rgba(255,250,249,0.98) 0%,
                rgba(255,247,246,0.97) 45%,
                rgba(251,235,238,0.98) 100%
              )
            `,
            boxShadow: `0 30px 70px ${T.shadow}`,
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 4,
              px: 0,
              py: { xs: 5, sm: 7 },
            }}
          >
            <Box
              className="invitation-reveal"
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 220, sm: 260 },
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #fdf8f4 100%)",
                  boxShadow:
                    "0 10px 30px rgba(185, 154, 97, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.9)",
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    ...scriptFont,
                    color: T.goldLight,
                    fontSize: { xs: 36, sm: 44 },
                    lineHeight: 1,
                    mb: -3,
                    zIndex: 1,
                  }}
                >
                  Mis
                </Typography>

                <Typography
                  sx={{
                    ...serifFont,
                    color: T.goldLight,
                    fontSize: { xs: 90, sm: 110 },
                    lineHeight: 0.9,
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    zIndex: 1,
                  }}
                >
                  15
                </Typography>

                <Typography
                  sx={{
                    ...scriptFont,
                    color: T.goldLight,
                    fontSize: { xs: 36, sm: 44 },
                    lineHeight: 1,
                    mt: 3,
                    zIndex: 1,
                  }}
                >
                  Años
                </Typography>
              </Box>
            </Box>

            <Box
              className="invitation-reveal invitation-delay-3"
              sx={{
                textAlign: "center",
                my: 5,
              }}
            >
              <Typography
                sx={{
                  ...serifFont,
                  color: T.gold,
                  fontSize: { xs: 20, sm: 24 },
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Faltan
              </Typography>

              <Countdown targetDate={fechaEvento} />
            </Box>

            <MusicPlayer />

            <Box
              sx={{
                mt: 4,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  ...scriptFont,
                  color: T.gold,
                  fontSize: { xs: 76, sm: 96 },
                  lineHeight: 0.9,
                  textShadow: "0 2px 10px rgba(152,79,98,0.12)",
                  textAlign: "center",
                }}
              >
                {quinceanera}
              </Typography>

              <Typography
                sx={{
                  ...scriptFont,
                  color: T.gold,
                  fontSize: { xs: 58, sm: 72 },
                  lineHeight: 0.9,
                  textShadow: "0 2px 10px rgba(152,79,98,0.12)",
                  textAlign: "center",
                }}
              >
                {apellidos}
              </Typography>
            </Box>

            <Typography
              sx={{
                ...serifFont,
                color: T.text,
                textAlign: "center",
                fontSize: 15,
                lineHeight: 1.9,
                fontStyle: "italic",
                maxWidth: 460,
                mx: "auto",
                mt: 3,
              }}
            >
              "{frasePersonal}"
            </Typography>

            <Box
              className="invitation-reveal invitation-delay-2"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 4, sm: 5 },
                alignItems: "center",
                my: 5,
                width: "100%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <PhotoStrip fotos={fotos} />
              </Box>
            </Box>

            <Box
              className="invitation-reveal invitation-delay-4"
              sx={{
                mt: 5,
              }}
            >
              <ParentsAndGodparents padrinos={padrinos} madrinas={madrinas} />
            </Box>

            <Box
              className="invitation-reveal invitation-delay-4"
              sx={{
                mt: 5,
              }}
            >
              <Typography
                sx={{
                  ...scriptFont,
                  color: T.roseDark,
                  textAlign: "center",
                  fontSize: { xs: 42, sm: 52 },
                  mb: 3,
                }}
              >
                Detalles
              </Typography>

              <Stack spacing={3}>
                <Box
                  sx={{
                    position: "relative",
                    background: "#fff9f7",
                    borderRadius: "18px",
                    p: 0.6,
                    boxShadow: "0 8px 24px rgba(102,52,64,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "14px",
                      px: 3,
                      py: 3.5,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        ...scriptFont,
                        color: T.roseDark,
                        fontSize: 36,
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      Recepción
                    </Typography>

                    <CupsIllustration />

                    <Typography
                      sx={{
                        ...serifFont,
                        color: T.gold,
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      17:30 PM
                    </Typography>

                    <Typography
                      sx={{
                        ...serifFont,
                        color: T.textDark,
                        fontSize: 18,
                        mt: 0.5,
                      }}
                    >
                      {lugar}
                    </Typography>

                    <Button
                      onClick={() => setActiveSection("location")}
                      sx={{
                        ...serifFont,
                        mt: 2.5,
                        color: "#fff",
                        background:
                          "linear-gradient(135deg, #c07a8b 0%, #a85e70 100%)",
                        borderRadius: "30px",
                        px: 3.5,
                        py: 0.9,
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        boxShadow: "0 6px 16px rgba(133,65,82,0.25)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #b66d7f 0%, #8d485b 100%)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all .3s ease",
                      }}
                    >
                      Ver ubicación
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    background: "#fff9f7",
                    borderRadius: "18px",
                    p: 0.6,
                    boxShadow: "0 8px 24px rgba(102,52,64,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "14px",
                      px: 3,
                      py: 3.5,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <CoupleIllustration />

                    <Typography
                      sx={{
                        ...serifFont,
                        color: T.textDark,
                        fontSize: 13,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Código de
                      <br />
                      Vestimenta
                    </Typography>

                    <Typography
                      sx={{
                        ...scriptFont,
                        color: T.roseDark,
                        fontSize: 34,
                        lineHeight: 1,
                        mt: 0.5,
                      }}
                    >
                      {codigoVestimenta}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    background: "#fff9f7",
                    borderRadius: "18px",
                    p: 0.6,
                    boxShadow: "0 8px 24px rgba(102,52,64,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "14px",
                      px: 3,
                      py: 3.5,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        ...scriptFont,
                        color: T.roseDark,
                        fontSize: 34,
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      Confirmar asistencia
                    </Typography>

                    <EnvelopeIllustration />

                    <Typography
                      sx={{
                        ...serifFont,
                        color: T.text,
                        fontSize: 14,
                        lineHeight: 1.6,
                        px: 1,
                      }}
                    >
                      Esperamos contar contigo en este día tan especial para mí
                    </Typography>

                    <Button
                      onClick={() => setOpenModal(true)}
                      sx={{
                        ...serifFont,
                        mt: 2.5,
                        color: "#fff",
                        background:
                          "linear-gradient(135deg, #c07a8b 0%, #a85e70 100%)",
                        borderRadius: "30px",
                        px: 3.5,
                        py: 0.9,
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        boxShadow: "0 6px 16px rgba(133,65,82,0.25)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #b66d7f 0%, #8d485b 100%)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all .3s ease",
                      }}
                    >
                      Confirmar
                    </Button>
                  </Box>
                </Box>
              </Stack>

              <Typography
                sx={{
                  ...scriptFont,
                  color: T.roseDark,
                  textAlign: "center",
                  fontSize: { xs: 64, sm: 80 },
                  lineHeight: 0.9,
                  mt: 5,
                  textShadow: "0 2px 10px rgba(152,79,98,0.12)",
                }}
              >
                {quinceanera}
              </Typography>
            </Box>

            <Typography
              sx={{
                ...serifFont,
                color: T.text,
                fontSize: 13,
                textAlign: "center",
                fontStyle: "italic",
                lineHeight: 1.8,
                mt: 3,
                px: 2,
              }}
            >
              {notasAdicionales}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
                mt: 4,
                color: T.gold,
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, #b99a61)",
                }}
              />

              <MusicNoteIcon
                sx={{
                  fontSize: 17,
                  animation: "softPulse 2.5s infinite",
                }}
              />

              <Box
                sx={{
                  width: 45,
                  height: 1,
                  background: "linear-gradient(90deg, #b99a61, transparent)",
                }}
              />
            </Box>
          </Box>
        </Box>
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

        {activeSection === "history" && (
          <Container maxWidth="md" sx={{ py: 4 }}>
            <HistorySection novio="" novia={quinceanera} historia={historia} />
          </Container>
        )}

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
