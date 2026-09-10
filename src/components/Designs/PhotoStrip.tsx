import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const PhotoStrip = ({ fotos }: { fotos?: string[] }) => {
  const imagenPrincipal = fotos?.length ? fotos[0] : "/imgGaleria1.jpeg";
  const imagenesCarrusel = fotos?.length
    ? fotos
    : ["/imgGaleria1.jpeg", "/imgGaleria1.jpeg", "/imgGaleria1.jpeg"];

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
        backgroundColor: "#fff",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(105,55,67,0.1)",
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
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

      <Box
        sx={{
          position: "relative",
          width: "100%",
          mt: { xs: 3, sm: 4 },
          py: { xs: 3, sm: 4 },
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component={motion.div}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
          sx={{
            display: "flex",
            width: "max-content",
            gap: { xs: 2, sm: 3 },
            px: { xs: 2, sm: 3 },
          }}
        >
          {[...imagenesCarrusel, ...imagenesCarrusel].map((foto, index) => (
            <Box
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              sx={{
                position: "relative",
                flexShrink: 0,
                width: { xs: 180, sm: 230, md: 280 },
                height: { xs: 220, sm: 280, md: 340 },
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(105,55,67,0.18)",
                border: "4px solid #fff",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={foto}
                alt={`Recuerdo ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(105,55,67,0.25), rgba(255,255,255,0) 55%)",
                  pointerEvents: "none",
                }}
              />
              <Box
                component={motion.div}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "50%",
                  height: "3px",
                  borderRadius: 2,
                  backgroundColor: "#f8bbd0",
                  transformOrigin: "center",
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: { xs: 40, sm: 80 },
            background:
              "linear-gradient(to right, #fff 20%, rgba(255,255,255,0))",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: { xs: 40, sm: 80 },
            background:
              "linear-gradient(to left, #fff 20%, rgba(255,255,255,0))",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};
