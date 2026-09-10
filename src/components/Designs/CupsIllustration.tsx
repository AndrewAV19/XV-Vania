import { Box } from "@mui/material";

export const CupsIllustration = () => (
  <Box
    sx={{
      width: { xs: 120, sm: 140 },
      height: { xs: 90, sm: 105 },
      mx: "auto",
      my: 1.5,
      "& svg": { overflow: "visible" },
    }}
  >
    <svg
      viewBox="0 0 140 105"
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
        {/* Copa izquierda */}
        <path d="M38 22 C34 42 40 56 50 58 C60 56 66 42 62 22 Z" />
        <path d="M38 22 L62 22" />
        <path d="M50 58 L50 78" />
        <path d="M40 78 L60 78" />
        <path d="M42 30 C44 40 46 48 50 50" stroke="#e3b6c0" strokeWidth="1" />
        {/* Burbujas copa izquierda */}
        <circle cx="47" cy="34" r="1.2" fill="#e8bcc6" stroke="none" />
        <circle cx="53" cy="40" r="1" fill="#e8bcc6" stroke="none" />
        <circle cx="50" cy="48" r="1.2" fill="#e8bcc6" stroke="none" />
        <circle cx="45" cy="42" r="0.9" fill="#e8bcc6" stroke="none" />

        {/* Copa derecha */}
        <path d="M78 22 C74 42 80 56 90 58 C100 56 106 42 102 22 Z" />
        <path d="M78 22 L102 22" />
        <path d="M90 58 L90 78" />
        <path d="M80 78 L100 78" />
        <path d="M82 30 C84 40 86 48 90 50" stroke="#e3b6c0" strokeWidth="1" />
        {/* Burbujas copa derecha */}
        <circle cx="86" cy="36" r="1.1" fill="#e8bcc6" stroke="none" />
        <circle cx="94" cy="42" r="1.2" fill="#e8bcc6" stroke="none" />
        <circle cx="89" cy="50" r="1" fill="#e8bcc6" stroke="none" />

        {/* Destellos */}
        <g stroke="#d9a4b2" strokeWidth="1">
          <path d="M50 12 L50 18" />
          <path d="M47 15 L53 15" />
          <path d="M90 8 L90 14" />
          <path d="M87 11 L93 11" />
          <path d="M28 60 L28 65" />
          <path d="M25.5 62.5 L30.5 62.5" />
          <path d="M112 56 L112 61" />
          <path d="M109.5 58.5 L114.5 58.5" />
        </g>

        {/* Brindis / corazones pequeños */}
        <path d="M70 18 C68 15 64 16 64 19 C64 22 70 26 70 26 C70 26 76 22 76 19 C76 16 72 15 70 18 Z" />
      </g>
    </svg>
  </Box>
);