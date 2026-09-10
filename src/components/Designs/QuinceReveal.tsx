import React from "react";
import { Box, Typography } from "@mui/material";
import { FloralDecoration } from "../Designs/Flowers";

const T = {
  gold: "#b99a61",
  goldLight: "#d3bb89",
};

const scriptFont = {
  fontFamily: "'Pinyon Script', cursive",
};

const serifFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

export const QuinceReveal: React.FC = () => {
  return (
    <Box
      className="invitation-reveal"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: { xs: "-3%", sm: "8%", md: "15%" },
          top: "100%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      >
        <FloralDecoration
          size={80}
          rotate={180}
          scale={1.5}
          opacity={0.9}
          sx={{
            width: { xs: 55, sm: 80, md: 110 },
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: { xs: "-3%", sm: "8%", md: "15%" },
          top: "100%",
          transform: "translateY(-50%) scaleX(-1)",
          zIndex: 0,
        }}
      >
        <FloralDecoration
          size={80}
          rotate={180}
          scale={1.5}
          opacity={0.9}
          sx={{
            width: { xs: 55, sm: 80, md: 110 },
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: 220, sm: 260 },
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #fdf8f4 100%)",
          boxShadow:
            "0 10px 30px rgba(185, 154, 97, 0.15), inset 0 0 15px rgba(255, 255, 255, 0.9)",
          mb: 3,
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            ...scriptFont,
            color: T.goldLight,
            fontSize: { xs: 36, sm: 44 },
            lineHeight: 1,
            mb: -3,
            zIndex: 1,
          }}
        >
          Mis
        </Typography>

        <Typography
          sx={{
            ...serifFont,
            color: T.goldLight,
            fontSize: { xs: 90, sm: 110 },
            lineHeight: 0.9,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          15
        </Typography>

        <Typography
          sx={{
            ...scriptFont,
            color: T.goldLight,
            fontSize: { xs: 36, sm: 44 },
            lineHeight: 1,
            mt: 3,
            zIndex: 1,
          }}
        >
          Años
        </Typography>
      </Box>
    </Box>
  );
};

export default QuinceReveal;
