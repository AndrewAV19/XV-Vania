import type { SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";

export const RoseDecoration = ({
  size = 150,
  rotate = 0,
  scale = 1,
  opacity = 0.95,
  sx,
}: {
  size?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  sx?: SxProps<Theme>;
}) => {
  const width = size;
  const height = size * (500 / 180);

  return (
    <Box
      sx={{
        width,
        height,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        transformOrigin: "center",
        opacity,
        pointerEvents: "none",
        "& svg": {
          overflow: "visible",
        },
        ...sx,
      }}
    >
      <svg
        viewBox="0 0 180 500"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="roseLight" cx="35%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#fff3ed" />
            <stop offset="35%" stopColor="#f9d8cd" />
            <stop offset="70%" stopColor="#efb9aa" />
            <stop offset="100%" stopColor="#d99682" />
          </radialGradient>

          <linearGradient id="rosePetal" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#fde7df" />
            <stop offset="35%" stopColor="#f7cfc3" />
            <stop offset="70%" stopColor="#edb4a3" />
            <stop offset="100%" stopColor="#d58e7b" />
          </linearGradient>

          <linearGradient
            id="rosePetalDark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f2c3b5" />
            <stop offset="55%" stopColor="#e6a391" />
            <stop offset="100%" stopColor="#c97d6b" />
          </linearGradient>

          <linearGradient id="roseLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9d4b5" />
            <stop offset="50%" stopColor="#b9b798" />
            <stop offset="100%" stopColor="#8d9178" />
          </linearGradient>

          <radialGradient id="roseCenter" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#d58b78" />
            <stop offset="45%" stopColor="#e9a997" />
            <stop offset="100%" stopColor="#f2c1b3" />
          </radialGradient>

          <filter id="roseShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <g
          fill="none"
          stroke="#513a31"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse
            cx="91"
            cy="184"
            rx="68"
            ry="20"
            fill="#9d6659"
            opacity="0.12"
            stroke="none"
            filter="url(#roseShadow)"
          />

          <g>
            <path
              d="
                M18 171
                C10 154 12 132 23 113
                C34 94 51 81 70 77
                C91 72 112 78 128 92
                C143 105 151 124 149 144
                C148 166 134 185 113 196
                C92 207 66 209 44 199
                C31 193 22 183 18 171
                Z
              "
              fill="url(#rosePetal)"
              strokeWidth="1.5"
            />

            <path
              d="
                M24 141
                C17 125 23 105 37 94
                C50 83 66 80 79 85
                C67 91 57 101 52 114
                C47 128 49 143 57 155
                C45 157 33 153 24 141
                Z
              "
              fill="url(#roseLight)"
              strokeWidth="1.25"
            />

            <path
              d="
                M38 94
                C48 82 63 76 77 79
                C88 81 95 88 98 97
                C85 94 72 98 63 107
                C53 117 50 131 54 143
                C45 132 39 112 38 94
                Z
              "
              fill="url(#rosePetal)"
              strokeWidth="1.25"
            />

            <path
              d="
                M78 79
                C94 76 111 82 121 94
                C129 103 132 114 131 125
                C122 114 112 108 101 107
                C91 105 82 109 75 116
                C67 124 64 135 66 146
                C57 135 55 121 60 108
                C64 95 70 85 78 79
                Z
              "
              fill="url(#roseLight)"
              strokeWidth="1.4"
            />

            <path
              d="
                M121 94
                C136 103 145 117 146 132
                C147 148 140 163 128 174
                C134 157 132 140 124 128
                C119 120 112 114 103 110
                C111 104 116 98 121 94
                Z
              "
              fill="url(#rosePetalDark)"
              strokeWidth="1.35"
            />

            <path
              d="
                M54 143
                C61 133 70 125 81 121
                C93 117 106 119 116 126
                C126 134 130 146 127 158
                C124 172 114 184 101 190
                C87 196 71 194 60 187
                C50 180 45 169 46 158
                C47 152 50 147 54 143
                Z
              "
              fill="url(#rosePetal)"
              strokeWidth="1.45"
            />

            <path
              d="
                M72 151
                C75 140 84 132 95 130
                C106 128 117 134 121 144
                C125 154 121 165 113 173
                C104 181 91 184 81 180
                C72 176 68 164 72 151
                Z
              "
              fill="url(#roseLight)"
              strokeWidth="1.35"
            />

            <path
              d="
                M83 151
                C87 143 95 139 103 140
                C111 141 116 147 115 154
                C114 161 108 166 101 169
                C94 171 87 168 84 163
                C81 159 81 155 83 151
                Z
              "
              fill="url(#roseCenter)"
              strokeWidth="1.15"
            />

            <path
              d="
                M92 150
                C96 146 102 146 105 150
                C108 154 106 159 102 161
                C98 163 94 161 92 158
                C90 155 90 152 92 150
                Z
              "
              fill="#d18a77"
              strokeWidth="1"
            />

            <path
              d="
                M28 119
                C39 108 51 101 64 99
              "
              stroke="#b77b6b"
              strokeWidth="0.95"
              opacity="0.55"
            />

            <path
              d="
                M28 143
                C41 137 51 137 61 142
              "
              stroke="#b77b6b"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M47 104
                C57 96 68 92 79 92
              "
              stroke="#b77b6b"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M64 110
                C74 102 84 99 94 101
              "
              stroke="#b77b6b"
              strokeWidth="0.95"
              opacity="0.5"
            />

            <path
              d="
                M72 123
                C82 114 94 111 105 114
              "
              stroke="#b77b6b"
              strokeWidth="0.9"
              opacity="0.48"
            />

            <path
              d="
                M54 158
                C59 149 66 143 74 140
              "
              stroke="#b77b6b"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M61 178
                C69 184 79 187 89 186
              "
              stroke="#b77b6b"
              strokeWidth="0.85"
              opacity="0.45"
            />

            <path
              d="
                M109 128
                C119 137 122 148 119 158
              "
              stroke="#a96c5d"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M82 147
                C88 138 97 134 106 136
              "
              stroke="#a96c5d"
              strokeWidth="0.85"
              opacity="0.55"
            />

            <path
              d="
                M100 175
                C107 168 111 161 111 153
              "
              stroke="#a96c5d"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M105 190
                C102 209 96 228 88 247
                C80 267 72 285 65 304
                C61 315 59 326 61 338
              "
              stroke="#4b4134"
              strokeWidth="1.55"
            />

            <path
              d="
                M87 247
                C75 240 64 241 55 249
                C64 257 76 259 86 255
              "
              fill="url(#roseLeaf)"
              strokeWidth="1.15"
            />

            <path
              d="
                M65 279
                C75 272 87 272 95 278
                C88 286 77 289 66 286
              "
              fill="url(#roseLeaf)"
              strokeWidth="1.05"
            />

            <path
              d="
                M61 338
                C58 347 56 356 57 365
              "
              strokeWidth="1.1"
              opacity="0.7"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
};
