
import { Box } from "@mui/material";

export const FloralDecoration = ({
  position,
  rotate = 0,
  scale = 1,
  opacity = 1,
}: {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  rotate?: number;
  scale?: number;
  opacity?: number;
}) => {
  const positions = {
    topLeft: {
      top: { xs: -12, sm: -18 },
      left: { xs: -14, sm: -25 },
    },
    topRight: {
      top: { xs: -12, sm: -18 },
      right: { xs: -14, sm: -25 },
    },
    bottomLeft: {
      bottom: { xs: -12, sm: -18 },
      left: { xs: -14, sm: -25 },
    },
    bottomRight: {
      bottom: { xs: -12, sm: -18 },
      right: { xs: -14, sm: -25 },
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        ...positions[position],
        width: { xs: 135, sm: 250 },
        height: { xs: 165, sm: 290 },
        transform: `rotate(${rotate}deg) scale(${scale})`,
        transformOrigin: "center",
        opacity,
        pointerEvents: "none",
        zIndex: 2,
        filter: "drop-shadow(0 8px 14px rgba(126,72,87,0.18))",
        "& svg": {
          overflow: "visible",
        },
      }}
    >
      <svg
        viewBox="0 0 260 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="petalPink" cx="35%" cy="28%" r="80%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#fff0f3" />
            <stop offset="42%" stopColor="#f3c3ce" />
            <stop offset="70%" stopColor="#d98ea0" />
            <stop offset="100%" stopColor="#a8556b" />
          </radialGradient>

          <radialGradient id="petalPinkDeep" cx="40%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#fff7f9" />
            <stop offset="22%" stopColor="#fbd8e0" />
            <stop offset="55%" stopColor="#e5a3b3" />
            <stop offset="85%" stopColor="#b96a80" />
            <stop offset="100%" stopColor="#8a4257" />
          </radialGradient>

          <radialGradient id="petalBlush" cx="45%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#fff2f5" />
            <stop offset="55%" stopColor="#f0c0cb" />
            <stop offset="85%" stopColor="#c9808f" />
            <stop offset="100%" stopColor="#96556a" />
          </radialGradient>

          <radialGradient id="petalHighlight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="petalShadow" cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#8a4257" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8a4257" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="flowerCenter" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#fff4d6" />
            <stop offset="45%" stopColor="#e3b877" />
            <stop offset="100%" stopColor="#9c6c35" />
          </radialGradient>

          <radialGradient id="flowerCenterSmall" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#ffefc9" />
            <stop offset="50%" stopColor="#d8a961" />
            <stop offset="100%" stopColor="#8f6128" />
          </radialGradient>

          <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfd6c0" />
            <stop offset="35%" stopColor="#a4b096" />
            <stop offset="70%" stopColor="#7c8a72" />
            <stop offset="100%" stopColor="#4f5c4a" />
          </linearGradient>

          <linearGradient id="leafVein" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="stemRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d69aa6" />
            <stop offset="50%" stopColor="#b17483" />
            <stop offset="100%" stopColor="#7f4a58" />
          </linearGradient>

          <linearGradient id="stemHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <filter id="softFlowerShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="3"
              floodColor="#6e3f4d"
              floodOpacity="0.22"
            />
          </filter>

          <filter id="petalSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>

          <filter id="flowerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="leafShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="1.5"
              floodColor="#3d4a38"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        <g filter="url(#softFlowerShadow)">
          <g
            fill="none"
            stroke="url(#stemRose)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 286 C35 235 54 194 82 157 C108 123 139 83 172 21" />
            <path d="M50 221 C40 188 31 159 35 128" />
            <path d="M72 177 C103 166 126 149 146 123" />
            <path d="M94 147 C80 118 75 91 83 65" />
            <path d="M122 108 C148 106 174 95 192 75" />
            <path d="M147 71 C140 48 144 30 157 13" />
            <path d="M28 275 C72 270 108 252 136 222" />
          </g>

          <g
            fill="none"
            stroke="url(#stemHighlight)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.85"
          >
            <path d="M24 285 C36 234 55 193 83 156 C109 122 140 82 173 20" />
            <path d="M51 220 C41 187 32 158 36 127" />
            <path d="M73 176 C104 165 127 148 147 122" />
            <path d="M95 146 C81 117 76 90 84 64" />
          </g>
        </g>

        <g filter="url(#leafShadow)">
          <g
            fill="url(#leafGreen)"
            stroke="#5a6854"
            strokeWidth="0.8"
            strokeLinejoin="round"
          >
            <path d="M47 207 C28 197 19 179 22 160 C41 162 55 178 47 207Z" />
            <path d="M60 187 C76 169 94 164 108 169 C97 188 80 195 60 187Z" />
            <path d="M74 157 C55 146 49 128 54 113 C73 120 82 137 74 157Z" />
            <path d="M91 145 C105 127 122 122 137 128 C126 145 110 152 91 145Z" />
            <path d="M116 109 C101 93 100 77 108 65 C124 76 128 92 116 109Z" />
            <path d="M139 92 C157 77 174 77 186 84 C172 97 155 101 139 92Z" />
            <path d="M148 64 C136 49 137 34 145 23 C158 36 159 51 148 64Z" />
            <path d="M29 245 C47 229 65 229 78 237 C64 249 46 253 29 245Z" />
          </g>

          <g
            fill="none"
            stroke="url(#leafVein)"
            strokeWidth="0.9"
            strokeLinecap="round"
          >
            <path d="M47 207 C40 190 34 178 30 168" />
            <path d="M60 187 C74 178 88 172 102 170" />
            <path d="M74 157 C64 143 58 130 57 120" />
            <path d="M91 145 C106 135 120 130 132 128" />
            <path d="M116 109 C112 95 110 82 110 72" />
            <path d="M139 92 C155 84 168 80 180 82" />
            <path d="M148 64 C143 53 142 41 145 30" />
          </g>
        </g>

        <g filter="url(#flowerGlow)">
          <g transform="translate(31 125)">
            <ellipse cx="0" cy="-18" rx="11" ry="23" fill="url(#petalPinkDeep)" transform="rotate(-12)" />
            <ellipse cx="0" cy="-18" rx="11" ry="23" fill="url(#petalShadow)" transform="rotate(-12)" opacity="0.5" />
            <ellipse cx="16" cy="-9" rx="11" ry="22" fill="url(#petalPinkDeep)" transform="rotate(42)" />
            <ellipse cx="15" cy="10" rx="11" ry="22" fill="url(#petalPinkDeep)" transform="rotate(82)" />
            <ellipse cx="-3" cy="18" rx="11" ry="23" fill="url(#petalPinkDeep)" transform="rotate(170)" />
            <ellipse cx="-17" cy="7" rx="11" ry="22" fill="url(#petalPinkDeep)" transform="rotate(220)" />
            <ellipse cx="-17" cy="-9" rx="11" ry="22" fill="url(#petalPinkDeep)" transform="rotate(275)" />
            <ellipse cx="-2" cy="-20" rx="4" ry="9" fill="url(#petalHighlight)" transform="rotate(-12)" opacity="0.85" />
            <ellipse cx="14" cy="-11" rx="3.5" ry="8" fill="url(#petalHighlight)" transform="rotate(42)" opacity="0.75" />
            <circle cx="0" cy="0" r="7.5" fill="url(#flowerCenter)" />
            <circle cx="-2" cy="-2" r="3.2" fill="#fff3d1" opacity="0.95" />
            <circle cx="2" cy="2" r="1.4" fill="#8f6128" opacity="0.55" />
          </g>

          <g transform="translate(82 65) scale(.72)">
            <ellipse cx="0" cy="-18" rx="11" ry="23" fill="url(#petalBlush)" />
            <ellipse cx="16" cy="-8" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(52)" />
            <ellipse cx="13" cy="13" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(105)" />
            <ellipse cx="-8" cy="17" rx="11" ry="23" fill="url(#petalBlush)" transform="rotate(160)" />
            <ellipse cx="-17" cy="2" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(220)" />
            <ellipse cx="-13" cy="-14" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(300)" />
            <ellipse cx="-1" cy="-19" rx="4" ry="9" fill="url(#petalHighlight)" opacity="0.85" />
            <ellipse cx="13" cy="-9" rx="3.2" ry="7" fill="url(#petalHighlight)" transform="rotate(52)" opacity="0.7" />
            <circle cx="0" cy="0" r="6.5" fill="url(#flowerCenterSmall)" />
            <circle cx="-1.8" cy="-1.8" r="2.6" fill="#fff3d1" opacity="0.95" />
          </g>

          <g transform="translate(153 91) scale(.6)">
            <ellipse cx="0" cy="-18" rx="11" ry="23" fill="url(#petalPink)" />
            <ellipse cx="16" cy="-8" rx="11" ry="22" fill="url(#petalPink)" transform="rotate(52)" />
            <ellipse cx="13" cy="13" rx="11" ry="22" fill="url(#petalPink)" transform="rotate(105)" />
            <ellipse cx="-8" cy="17" rx="11" ry="23" fill="url(#petalPink)" transform="rotate(160)" />
            <ellipse cx="-17" cy="2" rx="11" ry="22" fill="url(#petalPink)" transform="rotate(220)" />
            <ellipse cx="-13" cy="-14" rx="11" ry="22" fill="url(#petalPink)" transform="rotate(300)" />
            <ellipse cx="-1" cy="-19" rx="3.5" ry="8" fill="url(#petalHighlight)" opacity="0.85" />
            <circle cx="0" cy="0" r="6" fill="url(#flowerCenterSmall)" />
            <circle cx="-1.5" cy="-1.5" r="2.2" fill="#fff3d1" opacity="0.95" />
          </g>

          <g transform="translate(108 169) scale(.46)">
            <ellipse cx="0" cy="-18" rx="11" ry="23" fill="url(#petalBlush)" />
            <ellipse cx="16" cy="-8" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(52)" />
            <ellipse cx="13" cy="13" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(105)" />
            <ellipse cx="-8" cy="17" rx="11" ry="23" fill="url(#petalBlush)" transform="rotate(160)" />
            <ellipse cx="-17" cy="2" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(220)" />
            <ellipse cx="-13" cy="-14" rx="11" ry="22" fill="url(#petalBlush)" transform="rotate(300)" />
            <ellipse cx="-1" cy="-19" rx="3.5" ry="8" fill="url(#petalHighlight)" opacity="0.85" />
            <circle cx="0" cy="0" r="6" fill="url(#flowerCenterSmall)" />
            <circle cx="-1.5" cy="-1.5" r="2.2" fill="#fff3d1" opacity="0.95" />
          </g>
        </g>

        <g
          fill="none"
          stroke="#c98a98"
          strokeWidth="1.2"
          opacity="0.75"
          strokeLinecap="round"
        >
          <path d="M19 102 C9 91 10 76 20 68 C31 75 33 89 19 102Z" />
          <path d="M170 38 C161 25 165 12 176 7 C184 18 182 30 170 38Z" />
          <path d="M180 143 C169 132 170 117 181 110 C191 121 192 133 180 143Z" />
        </g>

        <g fill="#e6b8c2" opacity="0.85">
          <circle cx="28" cy="104" r="2.2" />
          <circle cx="28" cy="104" r="0.9" fill="#ffffff" opacity="0.9" />
          <circle cx="45" cy="93" r="1.6" />
          <circle cx="163" cy="46" r="2.2" />
          <circle cx="163" cy="46" r="0.9" fill="#ffffff" opacity="0.9" />
          <circle cx="188" cy="61" r="1.6" />
          <circle cx="178" cy="151" r="2.2" />
          <circle cx="178" cy="151" r="0.9" fill="#ffffff" opacity="0.9" />
          <circle cx="201" cy="137" r="1.6" />
        </g>

        <g fill="#ffffff" opacity="0.85">
          <circle cx="31" cy="122" r="1.2" />
          <circle cx="80" cy="63" r="1" />
          <circle cx="152" cy="89" r="1" />
          <circle cx="107" cy="167" r="0.9" />
        </g>

        <g opacity="0.5">
          <circle cx="31" cy="125" r="14" fill="url(#petalHighlight)">
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </Box>
  );
};

