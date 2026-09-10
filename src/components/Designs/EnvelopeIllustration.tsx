import { Box } from "@mui/material";

export const EnvelopeIllustration = () => (
  <Box
    sx={{
      width: { xs: 110, sm: 130 },
      height: { xs: 95, sm: 110 },
      mx: "auto",
      my: 1.5,
      "& svg": { overflow: "visible" },
    }}
  >
    <svg
      viewBox="0 0 130 110"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#c98898"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Sobre */}
        <path d="M25 42 L105 42 L105 92 L25 92 Z" />
        {/* Solapa superior */}
        <path d="M25 42 L65 72 L105 42" />
        {/* Líneas laterales */}
        <path d="M25 92 L55 68" stroke="#e3b6c0" strokeWidth="1.1" />
        <path d="M105 92 L75 68" stroke="#e3b6c0" strokeWidth="1.1" />

        {/* Moño */}
        <path d="M65 42 C58 34 50 34 50 42 C50 48 58 50 65 48" />
        <path d="M65 42 C72 34 80 34 80 42 C80 48 72 50 65 48" />
        <circle cx="65" cy="46" r="3" />
        {/* Colas del moño */}
        <path d="M62 48 C58 56 52 60 48 62" />
        <path d="M68 48 C72 56 78 60 82 62" />

        {/* Destellos */}
        <g stroke="#d9a4b2" strokeWidth="1">
          <path d="M65 18 L65 24" />
          <path d="M62 21 L68 21" />
          <path d="M110 60 L110 65" />
          <path d="M107.5 62.5 L112.5 62.5" />
          <path d="M20 70 L20 75" />
          <path d="M17.5 72.5 L22.5 72.5" />
        </g>
      </g>
    </svg>
  </Box>
);