import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";

interface ParentsAndGodparentsProps {
  parents?: string[];
  godparents?: string[];
}

const T = {
  gold: "#b99a61",
  textDark: "#563b41",
  rose: "#bd7484",
};

const serifFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

const scriptFont = {
  fontFamily: "'Great Vibes', 'Dancing Script', cursive",
};

export const ParentsAndGodparents: React.FC<ParentsAndGodparentsProps> = ({
  parents = ["Nelly Quito Camones", "Julio Santillan Olivera"],
  godparents = ["Olga Quito Camones", "Héctor Quito Camones"],
}) => {
  return (
    <Box sx={{ textAlign: "center", p: 3, maxWidth: 400, mx: "auto" }}>
      <Typography
        sx={{
          ...scriptFont,
          color: T.gold,
          fontSize: { xs: 24, sm: 28 },
          lineHeight: 1.2,
          mb: 4,
        }}
      >
        Gracias a mis Padres por hacer
        <br />
        este día posible
      </Typography>

      <Stack spacing={0.5} alignItems="center" sx={{ mb: 4 }}>
        {parents.map((item, index) => (
          <React.Fragment key={item}>
            <Typography
              sx={{
                ...serifFont,
                color: T.textDark,
                fontSize: { xs: 18, sm: 20 },
                fontWeight: 500,
              }}
            >
              {item}
            </Typography>
            {index < parents.length - 1 && (
              <Typography
                sx={{
                  ...serifFont,
                  color: T.textDark,
                  fontSize: { xs: 18, sm: 20 },
                  my: 0.5,
                }}
              >
                e
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Divider sx={{ width: "30%", borderColor: T.gold, opacity: 0.5 }} />
        <Typography sx={{ color: T.gold, mx: 2, fontSize: 18 }}>❧</Typography>
        <Divider sx={{ width: "30%", borderColor: T.gold, opacity: 0.5 }} />
      </Box>

      <Typography
        sx={{
          ...scriptFont,
          color: T.gold,
          fontSize: { xs: 24, sm: 28 },
          mb: 3,
        }}
      >
        Mis Padrinos
      </Typography>

      <Stack spacing={0.5} alignItems="center">
        {godparents.map((item, index) => (
          <React.Fragment key={item}>
            <Typography
              sx={{
                ...serifFont,
                color: T.textDark,
                fontSize: { xs: 18, sm: 20 },
                fontWeight: 500,
              }}
            >
              {item}
            </Typography>
            {index < godparents.length - 1 && (
              <Typography
                sx={{
                  ...serifFont,
                  color: T.textDark,
                  fontSize: { xs: 18, sm: 20 },
                  my: 0.5,
                }}
              >
                y
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default ParentsAndGodparents;
