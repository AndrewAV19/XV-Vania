import React from "react";
import { Box, Stack, Typography } from "@mui/material";

interface ParentsAndGodparentsProps {
  padrinos?: string[];
  madrinas?: string[];
}

const T = {
  rose: "#bd7484",
  gold: "#b99a61",
  textDark: "#563b41",
};

const serifFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

export const ParentsAndGodparents: React.FC<ParentsAndGodparentsProps> = ({
  padrinos = [],
  madrinas = [],
}) => {
  return (
    <Box>
      <Typography
        sx={{
          ...serifFont,
          color: T.gold,
          fontSize: 11,
          letterSpacing: "0.2em",
          textAlign: "center",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Con la bendición de nuestros padres y padrinos
      </Typography>

      <Stack spacing={0.4} alignItems="center" sx={{ mb: 2 }}>
        {padrinos.map((item) => (
          <Typography
            key={item}
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Typography
        sx={{
          color: T.rose,
          textAlign: "center",
          fontSize: 17,
          my: 1,
        }}
      >
        ♡
      </Typography>

      <Stack spacing={0.4} alignItems="center">
        {madrinas.map((item) => (
          <Typography
            key={item}
            sx={{
              ...serifFont,
              color: T.textDark,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default ParentsAndGodparents;
