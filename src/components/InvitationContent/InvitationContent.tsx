import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Countdown } from "../Designs/Countdown";
import { PhotoStrip } from "../Designs/PhotoStrip";
import ParentsAndGodparents from "../Designs/ParentsAndGodparents";
import DressCode from "../Designs/CoupleIllustration";
import { PhotoStripOnlyPhoto } from "../Designs/PhotoStripOnlyPhoto";
import EventDetails from "../Designs/EventDetails";
import { EnvelopeIllustration } from "../Designs/EnvelopeIllustration";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import QuinceReveal from "../Designs/QuinceReveal";

interface InvitationContentProps {
  quinceanera: string;
  apellidos: string;
  frasePersonal: string;
  fotos: string[];
  padres: string[];
  padrinos: string[];
  notasAdicionales: string;
  fechaEvento: string;
  onOpenModal: () => void;
}

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

export const InvitationContent: React.FC<InvitationContentProps> = ({
  quinceanera,
  apellidos,
  frasePersonal,
  fotos,
  padres,
  padrinos,
  notasAdicionales,
  fechaEvento,
  onOpenModal,
}) => {
  return (
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
          <QuinceReveal />

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
            <ParentsAndGodparents parents={padres} godparents={padrinos} />
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
              <DressCode />
            </Box>
          </Box>

          <Box
            className="invitation-reveal invitation-delay-2"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <PhotoStripOnlyPhoto fotos={fotos} />
            </Box>
          </Box>

          <Box className="invitation-reveal invitation-delay-4">
            <Stack>
              <Box
                sx={{
                  position: "relative",
                  background: "#fff9f7",
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
                  <EventDetails />
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  background: "#fff9f7",
                  p: 0.6,
                  boxShadow: "0 8px 24px rgba(102,52,64,0.08)",
                }}
              >
                <Box
                  sx={{
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
                    onClick={onOpenModal}
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
              <Typography
                sx={{
                  ...serifFont,
                  color: T.text,
                  fontSize: 13,
                  textAlign: "center",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                  mt: 3,
                }}
              >
                {notasAdicionales}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvitationContent;