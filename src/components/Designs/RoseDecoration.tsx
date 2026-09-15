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
        ...sx,
      }}
    >
      <Box
        component="img"
        src="/flor1.png"
        alt=""
        draggable={false}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          userSelect: "none",
        }}
      />
    </Box>
  );
};
