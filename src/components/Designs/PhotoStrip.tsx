import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const PhotoStrip = ({ fotos }: { fotos?: string[] }) => {
  const imagenPrincipal = fotos?.length ? fotos[0] : "/imgGaleria1.jpeg";

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        mx: "auto",
        backgroundColor: "#fff",
        overflow: "hidden",
        border: "2px solid #fce4ec",
        boxShadow: "0 10px 30px rgba(105,55,67,0.1)",
      }}
    >
      <Box
        component="img"
        src={imagenPrincipal}
        alt="Fotografía principal"
        sx={{
          width: "100%",
          height: { xs: "auto", sm: 450, md: 550 },
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "65%",
          background:
            "linear-gradient(to top, #ffffff 35%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 2, sm: 4 },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: "#8a5a5a",
            fontSize: { xs: "0.95rem", sm: "1.15rem", md: "1.25rem" },
            lineHeight: 1.6,
            fontWeight: 500,
            maxWidth: "95%",
            textShadow: "0px 1px 2px rgba(255,255,255,0.8)",
          }}
        >
          Me encantaría celebrar este día especial en compañía de amigos y
          familiares
        </Typography>

        <Box
          sx={{
            width: "40%",
            height: "2px",
            backgroundColor: "#f8bbd0",
            mt: 2,
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>
  );
};
