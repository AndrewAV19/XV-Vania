import { Box, Stack, Typography, Button } from "@mui/material";
import { FloralDecoration } from "./Flowers";

const T = {
  gold: "#b99a61",
  textDark: "#563b41",
  buttonBrown: "#a87c6a",
};

const serifFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

const scriptFont = {
  fontFamily: "'Great Vibes', 'Dancing Script', cursive",
};

const CalendarIcon = () => (
  <Box sx={{ width: 50, height: 50, mx: "auto" }}>
    <svg
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
      fill="none"
      stroke={T.textDark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="12" width="30" height="28" rx="3" />
      <path d="M10 20 L40 20" />
      <path d="M18 8 L18 16" />
      <path d="M32 8 L32 16" />
      <circle cx="18" cy="28" r="1.5" fill={T.textDark} />
      <circle cx="25" cy="28" r="1.5" fill={T.textDark} />
      <circle cx="32" cy="28" r="1.5" fill={T.textDark} />
      <circle cx="18" cy="35" r="1.5" fill={T.textDark} />
      <circle cx="25" cy="35" r="1.5" fill={T.textDark} />
      <circle cx="32" cy="35" r="1.5" fill={T.textDark} />
    </svg>
  </Box>
);

const ClockIcon = () => (
  <Box sx={{ width: 50, height: 50, mx: "auto" }}>
    <svg
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
      fill="none"
      stroke={T.textDark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="25" cy="25" r="18" />
      <path d="M25 15 L25 25 L32 30" />
    </svg>
  </Box>
);

const CupsIllustration = () => (
  <Box
    sx={{ width: { xs: 70, sm: 80 }, height: { xs: 60, sm: 70 }, mx: "auto" }}
  >
    <svg
      viewBox="0 0 140 105"
      width="100%"
      height="100%"
      fill="none"
      stroke={T.textDark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M38 22 C34 42 40 56 50 58 C60 56 66 42 62 22 Z" />
      <path d="M38 22 L62 22" />
      <path d="M50 58 L50 78" />
      <path d="M40 78 L60 78" />
      <path d="M78 22 C74 42 80 56 90 58 C100 56 106 42 102 22 Z" />
      <path d="M78 22 L102 22" />
      <path d="M90 58 L90 78" />
      <path d="M80 78 L100 78" />
      <path d="M70 18 C68 15 64 16 64 19 C64 22 70 26 70 26 C70 26 76 22 76 19 C76 16 72 15 70 18 Z" />
    </svg>
  </Box>
);

const PinIcon = () => (
  <Box sx={{ width: 40, height: 40, mx: "auto" }}>
    <svg
      viewBox="0 0 40 40"
      width="100%"
      height="100%"
      fill="none"
      stroke={T.textDark}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 36 C20 36 32 24 32 16 C32 9.4 26.6 4 20 4 C13.4 4 8 9.4 8 16 C8 24 20 36 20 36 Z" />
      <circle cx="20" cy="16" r="4" />
    </svg>
  </Box>
);

export const EventDetails = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, maxWidth: 400, mx: "auto" }}>
      <Stack spacing={4} alignItems="center">
        <Box>
          <CalendarIcon />
          <Typography
            sx={{ ...scriptFont, color: T.gold, fontSize: 28, mt: 1 }}
          >
            Fecha
          </Typography>
          <Typography
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            Sábado 27 Marzo
          </Typography>
          <Typography sx={{ ...serifFont, color: T.textDark, fontSize: 16 }}>
            2027
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: { xs: "-3%", sm: "8%", md: "15%" },
            top: "32%",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          <FloralDecoration
            size={80}
            rotate={180}
            scale={2}
            opacity={0.9}
            sx={{
              width: { xs: 55, sm: 80, md: 110 },
              height: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: { xs: "-3%", sm: "8%", md: "15%" },
            top: "32%",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 0,
          }}
        >
          <FloralDecoration
            size={80}
            rotate={180}
            scale={2}
            opacity={0.9}
            sx={{
              width: { xs: 55, sm: 80, md: 110 },
              height: "auto",
            }}
          />
        </Box>

        <Box>
          <ClockIcon />
          <Typography
            sx={{ ...scriptFont, color: T.gold, fontSize: 28, mt: 1 }}
          >
            Hora
          </Typography>
          <Typography
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            7:00 PM
          </Typography>
        </Box>

         <Box
          sx={{
            position: "absolute",
            left: { xs: "-3%", sm: "8%", md: "15%" },
            top: "72%",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          <FloralDecoration
            size={80}
            rotate={180}
            scale={2}
            opacity={0.9}
            sx={{
              width: { xs: 55, sm: 80, md: 110 },
              height: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: { xs: "-3%", sm: "8%", md: "15%" },
            top: "72%",
            transform: "translateY(-50%) scaleX(-1)",
            zIndex: 0,
          }}
        >
          <FloralDecoration
            size={80}
            rotate={180}
            scale={2}
            opacity={0.9}
            sx={{
              width: { xs: 55, sm: 80, md: 110 },
              height: "auto",
            }}
          />
        </Box>

        <Box>
          <CupsIllustration />
          <Typography
            sx={{ ...scriptFont, color: T.gold, fontSize: 28, mt: 1 }}
          >
            Recepción
          </Typography>
          <Typography
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Centro Naval Callao
          </Typography>
        </Box>

        <Box>
          <PinIcon />
          <Button
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: T.buttonBrown,
              color: "#fff",
              textTransform: "none",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16,
              borderRadius: 2,
              px: 3,
              py: 0.5,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#8c6354",
                boxShadow: "none",
              },
            }}
          >
            Ver Mapa
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default EventDetails;
