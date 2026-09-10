import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const PhotoStripOnlyPhoto = ({ fotos }: { fotos?: string[] }) => {
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
        mx: 0,
        overflow: "hidden",
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
    </Box>
  );
};
