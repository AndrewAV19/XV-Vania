import { Box, Stack, Typography } from "@mui/material";

const T = {
  gold: "#b99a61",
  textDark: "#563b41",
};

const serifFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

const scriptFont = {
  fontFamily: "'Great Vibes', 'Dancing Script', cursive",
};

const DressIcon = () => (
  <Box sx={{ width: { xs: 70, sm: 80 }, height: { xs: 80, sm: 90 }, mx: "auto" }}>
    <svg viewBox="0 0 80 90" width="100%" height="100%" fill="none" stroke={T.textDark} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 10 L40 20 L50 10" />
      <path d="M30 10 C28 15 28 20 32 25" />
      <path d="M50 10 C52 15 52 20 48 25" />
      <path d="M32 25 L28 35 L52 35 L48 25 Z" />
      <path d="M28 35 L20 75 L60 75 L52 35 Z" />
      <path d="M36 35 L36 75" strokeWidth="0.8" />
      <path d="M44 35 L44 75" strokeWidth="0.8" />
      <path d="M20 75 C25 78 55 78 60 75" />
    </svg>
  </Box>
);

const SuitIcon = () => (
  <Box sx={{ width: { xs: 70, sm: 80 }, height: { xs: 80, sm: 90 }, mx: "auto" }}>
    <svg viewBox="0 0 80 90" width="100%" height="100%" fill="none" stroke={T.textDark} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25 15 L40 25 L55 15" />
      <path d="M25 15 L20 30 L20 70 L60 70 L60 30 L55 15" />
      <path d="M40 25 L35 35 L40 45 L45 35 Z" />
      <path d="M20 35 L25 40 L25 65" />
      <path d="M60 35 L55 40 L55 65" />
      <path d="M40 45 L40 70" strokeWidth="0.8" />
      <circle cx="40" cy="52" r="1.5" fill={T.textDark} />
      <circle cx="40" cy="58" r="1.5" fill={T.textDark} />
    </svg>
  </Box>
);

export const DressCode = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, maxWidth: 500, mx: "auto" }}>
      <Typography
        sx={{
          ...scriptFont,
          color: T.gold,
          fontSize: { xs: 32, sm: 40 },
          mb: 3,
        }}
      >
        Código de vestimenta
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={{ xs: 4, sm: 8 }} sx={{ mb: 3 }}>
        <Box>
          <Typography
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: { xs: 16, sm: 18 },
              mb: 1,
            }}
          >
            Mujeres Vestido
          </Typography>
          <DressIcon />
        </Box>
        <Box>
          <Typography
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: { xs: 16, sm: 18 },
              mb: 1,
            }}
          >
            Varones Terno
          </Typography>
          <SuitIcon />
        </Box>
      </Stack>

      <Typography
        sx={{
          ...serifFont,
          color: T.gold,
          fontSize: { xs: 16, sm: 18 },
          lineHeight: 1.5,
          maxWidth: 300,
          mx: "auto",
        }}
      >
        Se reserva los tonos rosado y nude para la QUINCEAÑERA
      </Typography>
    </Box>
  );
};

export default DressCode;