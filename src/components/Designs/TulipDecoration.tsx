import type { SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";

export const TulipDecoration = ({
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
  const height = size * (520 / 180);

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
        viewBox="0 0 180 520"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="petalBase" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#fce5dc" />
            <stop offset="30%" stopColor="#f6d0c4" />
            <stop offset="65%" stopColor="#edb7a5" />
            <stop offset="100%" stopColor="#d99884" />
          </linearGradient>

          <linearGradient id="petalLight" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#fff0e9" />
            <stop offset="38%" stopColor="#f9dcd2" />
            <stop offset="75%" stopColor="#efc0b0" />
            <stop offset="100%" stopColor="#dda08c" />
          </linearGradient>

          <linearGradient id="petalDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4c8b8" />
            <stop offset="55%" stopColor="#e9aa96" />
            <stop offset="100%" stopColor="#cf8b77" />
          </linearGradient>

          <radialGradient id="petalGlow" cx="40%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#fff7f2" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f7d3c7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#df9e89" stopOpacity="0.05" />
          </radialGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>

          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="0.7" />
          </filter>
        </defs>

        <g
          fill="none"
          stroke="#513a31"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g>
            <ellipse
              cx="79"
              cy="180"
              rx="61"
              ry="18"
              fill="#9f6658"
              opacity="0.12"
              filter="url(#softShadow)"
              stroke="none"
            />

            <path
              d="
                M16 181
                C9 164 8 142 11 120
                C14 97 22 78 36 66
                C46 57 56 58 64 65
                C71 72 73 84 75 99
                C82 93 89 90 96 94
                C104 98 107 105 108 114
                C116 109 126 111 134 119
                C143 128 145 140 141 153
                C137 168 124 180 108 189
                C91 199 72 203 54 201
                C37 199 22 192 16 181
                Z
              "
              fill="url(#petalBase)"
              strokeWidth="1.55"
            />

            <path
              d="
                M16 181
                C10 164 10 143 13 122
                C16 99 24 79 37 68
                C45 62 53 61 59 65
                C52 73 45 83 40 95
                C34 110 31 127 31 144
                C31 161 35 179 43 193
                C31 191 21 187 16 181
                Z
              "
              fill="url(#petalDark)"
              strokeWidth="1.2"
            />

            <path
              d="
                M38 96
                C47 82 57 70 64 66
                C71 72 73 85 76 99
                C68 99 60 101 52 105
                C46 108 40 113 35 119
                C35 110 36 103 38 96
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.25"
            />

            <path
              d="
                M34 119
                C40 111 47 107 55 103
                C65 98 76 98 84 102
                C94 107 99 116 101 128
                C104 146 98 165 86 180
                C77 191 65 197 54 198
                C46 198 39 194 34 188
                C28 178 26 165 27 151
                C28 139 30 128 34 119
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.45"
            />

            <path
              d="
                M52 105
                C61 100 72 99 82 102
                C91 105 97 112 100 122
                C92 117 84 114 76 114
                C67 114 59 118 52 124
                C46 130 41 138 38 148
                C38 133 43 117 52 105
                Z
              "
              fill="url(#petalGlow)"
              stroke="none"
            />

            <path
              d="
                M76 99
                C82 94 89 92 96 95
                C103 99 106 106 108 114
                C102 115 98 119 95 125
                C92 115 86 107 76 99
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.25"
            />

            <path
              d="
                M108 114
                C116 110 126 112 134 120
                C142 129 143 140 140 151
                C136 165 126 176 110 185
                C116 174 119 162 119 150
                C118 136 114 124 108 114
                Z
              "
              fill="url(#petalBase)"
              strokeWidth="1.4"
            />

            <path
              d="
                M109 119
                C115 116 123 118 129 124
                C135 131 136 140 133 149
                C130 157 125 164 119 169
              "
              stroke="#b87667"
              strokeWidth="1"
              opacity="0.55"
            />

            <path
              d="
                M30 91
                C40 83 48 73 55 66
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.65"
            />

            <path
              d="
                M34 112
                C43 95 55 82 66 75
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.55"
            />

            <path
              d="
                M40 137
                C48 119 60 106 72 98
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.5"
            />

            <path
              d="
                M45 163
                C53 143 63 126 76 113
              "
              stroke="#a96e60"
              strokeWidth="0.95"
              opacity="0.48"
            />

            <path
              d="
                M53 184
                C62 165 72 145 84 127
              "
              stroke="#a96e60"
              strokeWidth="0.9"
              opacity="0.45"
            />

            <path
              d="
                M87 108
                C84 123 78 139 69 153
                C62 164 56 174 52 185
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.5"
            />

            <path
              d="
                M102 121
                C108 137 108 152 103 164
                C100 172 96 179 90 185
              "
              stroke="#a96e60"
              strokeWidth="0.95"
              opacity="0.55"
            />

            <path
              d="
                M116 126
                C122 138 124 150 121 160
                C119 168 115 175 109 180
              "
              stroke="#a96e60"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M16 181
                C18 193 25 204 32 216
                C39 228 40 240 36 254
                C32 271 23 288 15 302
                C11 309 9 318 10 327
              "
              stroke="#4c3830"
              strokeWidth="1.65"
            />

            <path
              d="
                M32 216
                C27 211 20 212 15 219
                C19 224 26 227 34 226
              "
              fill="url(#petalLight)"
              strokeWidth="1.1"
            />

            <path
              d="
                M34 219
                C39 213 46 211 51 214
                C48 221 42 225 34 226
              "
              fill="url(#petalBase)"
              strokeWidth="1.05"
            />

            <path
              d="
                M15 302
                C12 309 10 318 10 327
              "
              strokeWidth="1.1"
              opacity="0.7"
            />
          </g>

          <g transform="translate(0 520) scale(1 -1)">
            <ellipse
              cx="79"
              cy="180"
              rx="61"
              ry="18"
              fill="#9f6658"
              opacity="0.12"
              filter="url(#softShadow)"
              stroke="none"
            />

            <path
              d="
                M16 181
                C9 164 8 142 11 120
                C14 97 22 78 36 66
                C46 57 56 58 64 65
                C71 72 73 84 75 99
                C82 93 89 90 96 94
                C104 98 107 105 108 114
                C116 109 126 111 134 119
                C143 128 145 140 141 153
                C137 168 124 180 108 189
                C91 199 72 203 54 201
                C37 199 22 192 16 181
                Z
              "
              fill="url(#petalBase)"
              strokeWidth="1.55"
            />

            <path
              d="
                M16 181
                C10 164 10 143 13 122
                C16 99 24 79 37 68
                C45 62 53 61 59 65
                C52 73 45 83 40 95
                C34 110 31 127 31 144
                C31 161 35 179 43 193
                C31 191 21 187 16 181
                Z
              "
              fill="url(#petalDark)"
              strokeWidth="1.2"
            />

            <path
              d="
                M38 96
                C47 82 57 70 64 66
                C71 72 73 85 76 99
                C68 99 60 101 52 105
                C46 108 40 113 35 119
                C35 110 36 103 38 96
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.25"
            />

            <path
              d="
                M34 119
                C40 111 47 107 55 103
                C65 98 76 98 84 102
                C94 107 99 116 101 128
                C104 146 98 165 86 180
                C77 191 65 197 54 198
                C46 198 39 194 34 188
                C28 178 26 165 27 151
                C28 139 30 128 34 119
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.45"
            />

            <path
              d="
                M52 105
                C61 100 72 99 82 102
                C91 105 97 112 100 122
                C92 117 84 114 76 114
                C67 114 59 118 52 124
                C46 130 41 138 38 148
                C38 133 43 117 52 105
                Z
              "
              fill="url(#petalGlow)"
              stroke="none"
            />

            <path
              d="
                M76 99
                C82 94 89 92 96 95
                C103 99 106 106 108 114
                C102 115 98 119 95 125
                C92 115 86 107 76 99
                Z
              "
              fill="url(#petalLight)"
              strokeWidth="1.25"
            />

            <path
              d="
                M108 114
                C116 110 126 112 134 120
                C142 129 143 140 140 151
                C136 165 126 176 110 185
                C116 174 119 162 119 150
                C118 136 114 124 108 114
                Z
              "
              fill="url(#petalBase)"
              strokeWidth="1.4"
            />

            <path
              d="
                M30 91
                C40 83 48 73 55 66
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.65"
            />

            <path
              d="
                M34 112
                C43 95 55 82 66 75
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.55"
            />

            <path
              d="
                M40 137
                C48 119 60 106 72 98
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.5"
            />

            <path
              d="
                M45 163
                C53 143 63 126 76 113
              "
              stroke="#a96e60"
              strokeWidth="0.95"
              opacity="0.48"
            />

            <path
              d="
                M53 184
                C62 165 72 145 84 127
              "
              stroke="#a96e60"
              strokeWidth="0.9"
              opacity="0.45"
            />

            <path
              d="
                M87 108
                C84 123 78 139 69 153
                C62 164 56 174 52 185
              "
              stroke="#a96e60"
              strokeWidth="1"
              opacity="0.5"
            />

            <path
              d="
                M102 121
                C108 137 108 152 103 164
                C100 172 96 179 90 185
              "
              stroke="#a96e60"
              strokeWidth="0.95"
              opacity="0.55"
            />

            <path
              d="
                M116 126
                C122 138 124 150 121 160
                C119 168 115 175 109 180
              "
              stroke="#a96e60"
              strokeWidth="0.9"
              opacity="0.5"
            />

            <path
              d="
                M16 181
                C18 193 25 204 32 216
                C39 228 40 240 36 254
                C32 271 23 288 15 302
                C11 309 9 318 10 327
              "
              stroke="#4c3830"
              strokeWidth="1.65"
            />

            <path
              d="
                M32 216
                C27 211 20 212 15 219
                C19 224 26 227 34 226
              "
              fill="url(#petalLight)"
              strokeWidth="1.1"
            />

            <path
              d="
                M34 219
                C39 213 46 211 51 214
                C48 221 42 225 34 226
              "
              fill="url(#petalBase)"
              strokeWidth="1.05"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
};
