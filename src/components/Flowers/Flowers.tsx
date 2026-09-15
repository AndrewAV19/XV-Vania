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
        ...sx,
      }}
    >
      <Box
        component="img"
        src="/flor3.png"
        alt=""
        draggable={false}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          transform: "rotate(180deg)",
        }}
      />
    </Box>
  );
};
