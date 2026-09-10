import { Box, Typography } from "@mui/material";

export const OrnamentalLine = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      my: 2.2,
    }}
  >
    <Box
      sx={{
        width: 55,
        height: "1px",
        background: "linear-gradient(90deg, transparent, #c78394)",
      }}
    />
    <Typography
      sx={{
        color: "#b86f80",
        fontSize: 15,
        letterSpacing: 3,
        lineHeight: 1,
      }}
    >
      ❧
    </Typography>
    <Typography
      sx={{
        color: "#b86f80",
        fontSize: 13,
        lineHeight: 1,
      }}
    >
      ♡
    </Typography>
    <Typography
      sx={{
        color: "#b86f80",
        fontSize: 15,
        letterSpacing: 3,
        lineHeight: 1,
      }}
    >
      ❧
    </Typography>
    <Box
      sx={{
        width: 55,
        height: "1px",
        background: "linear-gradient(90deg, #c78394, transparent)",
      }}
    />
  </Box>
);
