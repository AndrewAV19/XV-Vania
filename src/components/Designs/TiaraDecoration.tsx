import { Box } from "@mui/material";

export const TiaraDecoration = () => (
  <Box
    sx={{
      width: { xs: 260, sm: 320 },
      height: { xs: 115, sm: 140 },
      mx: "auto",
      position: "relative",
      filter: "drop-shadow(0 8px 16px rgba(90, 60, 20, 0.25))",
      "& svg": { overflow: "visible" },
    }}
  >
    <svg
      viewBox="0 0 320 135"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tiaraGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b4a1f" />
          <stop offset="15%" stopColor="#c9a961" />
          <stop offset="30%" stopColor="#f5e6b8" />
          <stop offset="45%" stopColor="#d4b06a" />
          <stop offset="60%" stopColor="#8f6b32" />
          <stop offset="75%" stopColor="#e8d193" />
          <stop offset="90%" stopColor="#f7ecc4" />
          <stop offset="100%" stopColor="#7a5628" />
        </linearGradient>
        <linearGradient id="tiaraGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff4d1" />
          <stop offset="50%" stopColor="#e4c98a" />
          <stop offset="100%" stopColor="#a07d3f" />
        </linearGradient>
        <radialGradient id="gemPink" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#ffe4ea" />
          <stop offset="45%" stopColor="#efb7c2" />
          <stop offset="75%" stopColor="#c97a8e" />
          <stop offset="100%" stopColor="#8a3f52" />
        </radialGradient>
        <radialGradient id="gemGold" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#fff8dc" />
          <stop offset="50%" stopColor="#e8c97a" />
          <stop offset="80%" stopColor="#b8903f" />
          <stop offset="100%" stopColor="#6b4a1f" />
        </radialGradient>
        <radialGradient id="gemCenter" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="15%" stopColor="#fff0f4" />
          <stop offset="40%" stopColor="#f5c4d1" />
          <stop offset="70%" stopColor="#d4829a" />
          <stop offset="100%" stopColor="#8a3f52" />
        </radialGradient>
        <radialGradient id="gemShine" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Resplandor dorado suave para todo el metal */}
        <filter id="tiaraShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="3"
            floodColor="#5a3d1a"
            floodOpacity="0.28"
          />
        </filter>

        {/* Glow más intenso y "aureolado" para las gemas */}
        <filter id="gemGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="1.4" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===== Metal de la tiara ===== */}
      <g filter="url(#tiaraShadow)">
        <path
          d="M35 105 C85 76 235 76 285 105"
          fill="none"
          stroke="url(#tiaraGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M47 100 C91 82 229 82 273 100"
          fill="none"
          stroke="url(#tiaraGoldLight)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M57 96 L67 58 L88 82 L103 42 L124 78 L160 15 L196 78 L217 42 L232 82 L253 58 L263 96"
          fill="none"
          stroke="url(#tiaraGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M57 96 L67 58 L88 82 L103 42 L124 78 L160 15 L196 78 L217 42 L232 82 L253 58 L263 96 Z"
          fill="url(#tiaraGold)"
          opacity="0.12"
        />
        <path
          d="M67 58 C57 45 58 31 68 22 C80 32 80 45 67 58Z"
          fill="url(#tiaraGoldLight)"
          fillOpacity="0.35"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M103 42 C94 28 98 14 110 7 C118 20 115 33 103 42Z"
          fill="url(#tiaraGoldLight)"
          fillOpacity="0.35"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M217 42 C205 31 202 18 210 7 C222 14 226 28 217 42Z"
          fill="url(#tiaraGoldLight)"
          fillOpacity="0.35"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M253 58 C240 45 240 32 252 22 C262 31 263 45 253 58Z"
          fill="url(#tiaraGoldLight)"
          fillOpacity="0.35"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M124 78 C119 57 127 38 145 30 C150 50 143 68 124 78Z"
          fill="url(#tiaraGold)"
          fillOpacity="0.18"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M196 78 C201 57 193 38 175 30 C170 50 177 68 196 78Z"
          fill="url(#tiaraGold)"
          fillOpacity="0.18"
          stroke="url(#tiaraGold)"
          strokeWidth="1.6"
        />
        <path
          d="M83 87 C86 73 94 64 105 61"
          fill="none"
          stroke="url(#tiaraGoldLight)"
          strokeWidth="1.3"
          opacity="0.9"
        />
        <path
          d="M237 87 C234 73 226 64 215 61"
          fill="none"
          stroke="url(#tiaraGoldLight)"
          strokeWidth="1.3"
          opacity="0.9"
        />
        <path
          d="M88 82 C92 76 98 74 103 76"
          fill="none"
          stroke="url(#tiaraGoldLight)"
          strokeWidth="1"
          opacity="0.7"
        />
        <path
          d="M217 76 C222 74 228 76 232 82"
          fill="none"
          stroke="url(#tiaraGoldLight)"
          strokeWidth="1"
          opacity="0.7"
        />
      </g>

      {/* ===== Gemas con glow y parpadeo ===== */}
      <g filter="url(#gemGlow)">
        {[
          { cx: 68, cy: 22, r: 5.5, fill: "gemPink", delay: "0s" },
          { cx: 110, cy: 7, r: 5.5, fill: "gemGold", delay: "0.3s" },
          { cx: 160, cy: 15, r: 8, fill: "gemCenter", delay: "0.6s" },
          { cx: 210, cy: 7, r: 5.5, fill: "gemGold", delay: "0.9s" },
          { cx: 252, cy: 22, r: 5.5, fill: "gemPink", delay: "1.2s" },
          { cx: 103, cy: 42, r: 4.5, fill: "gemPink", delay: "0.15s" },
          { cx: 217, cy: 42, r: 4.5, fill: "gemPink", delay: "0.45s" },
          { cx: 124, cy: 78, r: 4.5, fill: "gemGold", delay: "0.75s" },
          { cx: 196, cy: 78, r: 4.5, fill: "gemGold", delay: "1.05s" },
          { cx: 160, cy: 88, r: 5.5, fill: "gemPink", delay: "1.35s" },
        ].map((g, i) => (
          <g key={i}>
            <circle cx={g.cx} cy={g.cy} r={g.r} fill={`url(#${g.fill})`} />
            <circle
              cx={g.cx}
              cy={g.cy}
              r={g.r * 0.36}
              fill="url(#gemShine)"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2.4s"
                begin={g.delay}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </g>

      {/* ===== Destellos de 4 puntas (el efecto "sparkle") ===== */}
      <g fill="#ffffff">
        {[
          { x: 160, y: 15, s: 9, delay: "0s", dur: "2.2s" },
          { x: 110, y: 7, s: 6, delay: "0.5s", dur: "2.6s" },
          { x: 210, y: 7, s: 6, delay: "1s", dur: "2.6s" },
          { x: 68, y: 22, s: 5, delay: "1.4s", dur: "2.4s" },
          { x: 252, y: 22, s: 5, delay: "0.2s", dur: "2.4s" },
          { x: 160, y: 88, s: 6, delay: "0.8s", dur: "2.8s" },
        ].map((sp, i) => (
          <g key={i} transform={`translate(${sp.x} ${sp.y})`} opacity="0">
            <path
              d={`M0 ${-sp.s} L${sp.s * 0.22} ${-sp.s * 0.22} L${sp.s} 0 L${sp.s * 0.22} ${sp.s * 0.22} L0 ${sp.s} L${-sp.s * 0.22} ${sp.s * 0.22} L${-sp.s} 0 L${-sp.s * 0.22} ${-sp.s * 0.22} Z`}
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={sp.dur}
              begin={sp.delay}
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${sp.x} ${sp.y}`}
              to={`180 ${sp.x} ${sp.y}`}
              dur={sp.dur}
              begin={sp.delay}
              repeatCount="indefinite"
              additive="sum"
            />
          </g>
        ))}
      </g>

      {/* ===== Reflejos lineales sobre el metal ===== */}
      <g fill="none" stroke="#fff8e0" strokeWidth="1" opacity="0.9">
        <path d="M160 5 L160 25" strokeWidth="1.2" />
        <path d="M155 15 L165 15" strokeWidth="1.2" />
        <path d="M103 32 L103 48" />
        <path d="M99 42 L107 42" />
        <path d="M217 32 L217 48" />
        <path d="M213 42 L221 42" />
      </g>

      {/* ===== Puntitos de brillo dorado ===== */}
      <g fill="#f5e6b8" opacity="0.95">
        <circle cx="84" cy="88" r="2.2" />
        <circle cx="84" cy="88" r="0.8" fill="#ffffff" opacity="0.8" />
        <circle cx="94" cy="85" r="1.7" />
        <circle cx="226" cy="85" r="1.7" />
        <circle cx="236" cy="88" r="2.2" />
        <circle cx="236" cy="88" r="0.8" fill="#ffffff" opacity="0.8" />
      </g>

      {/* ===== Halo pulsante alrededor de la gema central ===== */}
      <circle cx="160" cy="15" r="14" fill="url(#gemShine)" opacity="0.3">
        <animate
          attributeName="opacity"
          values="0.2;0.55;0.2"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="10;16;10"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </Box>
);