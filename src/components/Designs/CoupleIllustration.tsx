import { Box } from "@mui/material";

export const CoupleIllustration = () => (
  <Box
    sx={{
      width: { xs: 130, sm: 150 },
      height: { xs: 120, sm: 135 },
      mx: "auto",
      my: 1.5,
      "& svg": { overflow: "visible" },
    }}
  >
    <svg
      viewBox="0 0 150 135"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#c98898"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Él */}
        {/* Cabeza */}
        <circle cx="52" cy="22" r="9" />
        {/* Cabello */}
        <path d="M43 20 C43 13 48 10 52 10 C56 10 61 13 61 20" />
        {/* Cuello / saco */}
        <path d="M52 31 L52 36" />
        <path d="M44 36 L52 42 L60 36 L64 42 L64 74 L40 74 L40 42 Z" />
        {/* Solapas */}
        <path d="M48 36 L52 46 L56 36" />
        {/* Corbata */}
        <path d="M52 46 L50 52 L52 66 L54 52 Z" />
        {/* Brazo izquierdo */}
        <path d="M40 44 C34 48 32 56 34 62" />
        {/* Brazo derecho */}
        <path d="M64 44 C70 48 72 56 70 62" />
        {/* Piernas */}
        <path d="M46 74 L46 110" />
        <path d="M58 74 L58 110" />
        {/* Zapatos */}
        <path d="M42 110 L50 110" />
        <path d="M54 110 L62 110" />

        {/* Ella */}
        {/* Cabeza */}
        <circle cx="98" cy="22" r="9" />
        {/* Cabello largo */}
        <path d="M89 22 C86 32 86 44 90 50" />
        <path d="M107 22 C110 32 110 44 106 50" />
        <path d="M89 18 C89 11 94 8 98 8 C102 8 107 11 107 18" />
        {/* Cuello */}
        <path d="M98 31 L98 36" />
        {/* Vestido - torso */}
        <path d="M90 36 L98 40 L106 36 L108 58 L88 58 Z" />
        {/* Falda larga */}
        <path d="M88 58 C84 78 82 96 80 116" />
        <path d="M108 58 C112 78 114 96 116 116" />
        <path d="M80 116 L116 116" />
        {/* Pliegues de la falda */}
        <path d="M94 60 C92 80 91 98 90 114" stroke="#e3b6c0" strokeWidth="1" />
        <path
          d="M102 60 C104 80 105 98 106 114"
          stroke="#e3b6c0"
          strokeWidth="1"
        />
        {/* Brazo izquierdo */}
        <path d="M90 42 C85 46 84 54 86 60" />
        {/* Brazo derecho */}
        <path d="M106 42 C111 46 112 54 110 60" />
        {/* Zapatos */}
        <path d="M76 116 L84 116" />
        <path d="M112 116 L120 116" />

        {/* Corazón entre ambos */}
        <path
          d="M72 78 C70 75 66 76 66 79 C66 82 72 86 72 86 C72 86 78 82 78 79 C78 76 74 75 72 78 Z"
          stroke="#d47f92"
        />

        {/* Destellos */}
        <g stroke="#d9a4b2" strokeWidth="1">
          <path d="M120 14 L120 20" />
          <path d="M117 17 L123 17" />
          <path d="M28 70 L28 75" />
          <path d="M25.5 72.5 L30.5 72.5" />
        </g>
      </g>
    </svg>
  </Box>
);
