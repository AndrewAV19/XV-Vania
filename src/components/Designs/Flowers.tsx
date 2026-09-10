import type { SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";

export const FloralDecoration = ({
  size = 60,
  rotate = 0,
  scale = 0.4,
  opacity = 0.85,
  sx,
}: {
  size?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  sx?: SxProps<Theme>;
}) => {
  const width = size;
  const height = size * (300 / 260);

  return (
    <Box
      sx={{
        width,
        height,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        transformOrigin: "center",
        opacity,
        pointerEvents: "none",
        filter: "drop-shadow(0 4px 8px rgba(126,72,87,0.08))",
        "& svg": { overflow: "visible" },
        ...sx,
      }}
    >
      <svg
        viewBox="0 0 260 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="petalMain" cx="80%" cy="45%" r="90%">
            <stop offset="0%" stopColor="#e79e86" />
            <stop offset="25%" stopColor="#eeb39d" />
            <stop offset="55%" stopColor="#f6d2c1" />
            <stop offset="80%" stopColor="#fbe6db" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
          <radialGradient id="petalDeep" cx="85%" cy="50%" r="85%">
            <stop offset="0%" stopColor="#d98d72" />
            <stop offset="30%" stopColor="#e8a98f" />
            <stop offset="65%" stopColor="#f3cbb9" />
            <stop offset="100%" stopColor="#fdf1ea" />
          </radialGradient>
          <radialGradient id="flowerCenter" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#f2c79a" />
            <stop offset="45%" stopColor="#d68f52" />
            <stop offset="100%" stopColor="#a35f2c" />
          </radialGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#8a5a4a"
              floodOpacity="0.15"
            />
          </filter>
        </defs>

        <g filter="url(#softShadow)">
          <path
            d="M225 95
               C215 45 165 15 115 25
               C65 35 35 80 45 130
               C55 180 105 205 155 195
               C205 185 235 145 225 95Z"
            fill="url(#petalMain)"
            stroke="#c98a78"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          <path
            d="M215 130
               C195 90 140 75 95 100
               C50 125 35 175 65 210
               C95 245 150 245 180 210
               C205 180 225 160 215 130Z"
            fill="url(#petalDeep)"
            stroke="#c98a78"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          <path
            d="M210 175
               C185 155 130 155 90 185
               C50 215 40 260 75 285
               C110 310 165 300 190 265
               C210 235 225 195 210 175Z"
            fill="url(#petalMain)"
            stroke="#c98a78"
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
          <path
            d="M225 165
               C220 140 205 120 205 120
               C200 155 170 190 130 205
               C90 220 45 215 25 190
               C15 220 25 255 60 275
               C100 297 160 290 195 260
               C220 237 232 200 225 165Z"
            fill="url(#petalDeep)"
            stroke="#c98a78"
            strokeWidth="0.6"
            strokeOpacity="0.3"
          />

          <g
            fill="none"
            stroke="#5a3a30"
            strokeWidth="1.4"
            strokeOpacity="0.55"
            strokeLinecap="round"
          >
            <path d="M210 145 C175 110 140 75 110 35" />
            <path d="M212 150 C170 125 130 100 90 65" />
            <path d="M213 155 C165 140 120 130 75 115" />
            <path d="M212 160 C165 165 115 175 65 175" />
            <path d="M210 165 C165 185 115 210 70 225" />
            <path d="M205 172 C165 200 120 235 85 265" />
            <path d="M198 180 C165 215 135 255 110 285" />
            <path d="M190 185 C160 215 135 250 120 280" />
            <path d="M215 140 C190 105 160 70 140 40" />
            <path d="M216 150 C185 120 150 95 115 75" />
            <path d="M217 160 C180 170 140 185 100 190" />
            <path d="M213 170 C178 195 140 225 105 250" />
          </g>

          <g transform="translate(215 155)">
            <circle cx="0" cy="0" r="15" fill="url(#flowerCenter)" />
            <circle cx="-4" cy="-4" r="5" fill="#f5e6c8" opacity="0.9" />
            <circle cx="4" cy="4" r="3" fill="#8a5a2a" opacity="0.55" />
            <circle cx="-9" cy="-5" r="1.6" fill="#d9a86c" opacity="0.8" />
            <circle cx="9" cy="-7" r="1.6" fill="#d9a86c" opacity="0.8" />
            <circle cx="7" cy="9" r="1.6" fill="#d9a86c" opacity="0.8" />
            <circle cx="-7" cy="9" r="1.6" fill="#d9a86c" opacity="0.8" />
          </g>
        </g>

        <g fill="#2a1a15" opacity="0.7">
          <circle cx="40" cy="30" r="2.4" />
          <circle cx="65" cy="70" r="1.8" />
          <circle cx="15" cy="100" r="2" />
          <circle cx="235" cy="45" r="2" />
          <circle cx="15" cy="215" r="2.2" />
          <circle cx="215" cy="325" r="2" />
          <circle cx="90" cy="330" r="1.8" />
          <circle cx="180" cy="55" r="1.5" />
        </g>

        <g
          stroke="#2a1a15"
          strokeWidth="1.1"
          strokeOpacity="0.45"
          strokeLinecap="round"
        >
          <path d="M55 45 L60 50" />
          <path d="M225 65 L230 70" />
          <path d="M25 130 L30 135" />
          <path d="M30 240 L35 245" />
          <path d="M195 300 L200 305" />
        </g>
      </svg>
    </Box>
  );
};
