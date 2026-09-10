import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const PhotoStrip = ({ fotos }: { fotos?: string[] }) => {
  const imagenes = fotos?.length
    ? fotos.slice(0, 3)
    : ["/imgGaleria1.jpeg", "/imgGaleria1.jpeg", "/imgGaleria1.jpeg"];

  return (
    <Box
      sx={{
        width: { xs: 205, sm: 230 },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
      }}
    >
      {imagenes.map((foto, index) => (
        <Box
          key={`${foto}-${index}`}
          component={motion.img}
          src={foto}
          alt={`Fotografía ${index + 1}`}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            width: "100%",
            height: { xs: 125, sm: 140 },
            objectFit: "cover",
            border: "7px solid #fff",
            boxShadow: "0 5px 18px rgba(105,55,67,0.18)",
            transform: `rotate(${index === 1 ? 1 : -1}deg)`,
          }}
        />
      ))}
    </Box>
  );
};
