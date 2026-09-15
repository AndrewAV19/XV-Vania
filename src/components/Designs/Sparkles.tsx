import { Box } from "@mui/material";

export const Sparkles = () => {
  const sparkles = [
    { left: "4%", top: "4%", size: 8, delay: "0s", duration: "2.5s" },
    { left: "14%", top: "12%", size: 6, delay: "1.2s", duration: "3s" },
    { left: "27%", top: "6%", size: 9, delay: "2s", duration: "2.4s" },
    { left: "41%", top: "15%", size: 7, delay: "0.6s", duration: "2.8s" },
    { left: "56%", top: "5%", size: 8, delay: "1.8s", duration: "2.6s" },
    { left: "70%", top: "13%", size: 6, delay: "2.4s", duration: "3s" },
    { left: "84%", top: "7%", size: 9, delay: "0.8s", duration: "2.5s" },
    { left: "96%", top: "17%", size: 7, delay: "1.5s", duration: "2.9s" },

    { left: "8%", top: "24%", size: 7, delay: "2.2s", duration: "2.8s" },
    { left: "20%", top: "31%", size: 9, delay: "0.4s", duration: "2.4s" },
    { left: "34%", top: "22%", size: 6, delay: "1.7s", duration: "3.1s" },
    { left: "49%", top: "28%", size: 8, delay: "2.7s", duration: "2.5s" },
    { left: "63%", top: "21%", size: 7, delay: "1s", duration: "2.9s" },
    { left: "77%", top: "34%", size: 9, delay: "2.1s", duration: "2.4s" },
    { left: "91%", top: "27%", size: 6, delay: "0.9s", duration: "3s" },

    { left: "3%", top: "41%", size: 9, delay: "1.3s", duration: "2.6s" },
    { left: "16%", top: "48%", size: 6, delay: "2.4s", duration: "3s" },
    { left: "29%", top: "39%", size: 8, delay: "0.5s", duration: "2.4s" },
    { left: "43%", top: "52%", size: 7, delay: "1.9s", duration: "2.8s" },
    { left: "57%", top: "43%", size: 9, delay: "2.6s", duration: "2.5s" },
    { left: "71%", top: "49%", size: 6, delay: "0.7s", duration: "3s" },
    { left: "86%", top: "42%", size: 8, delay: "1.6s", duration: "2.7s" },
    { left: "97%", top: "53%", size: 7, delay: "2.2s", duration: "2.4s" },

    { left: "6%", top: "59%", size: 7, delay: "1.1s", duration: "2.8s" },
    { left: "22%", top: "67%", size: 9, delay: "2.5s", duration: "2.5s" },
    { left: "37%", top: "58%", size: 6, delay: "0.3s", duration: "3s" },
    { left: "52%", top: "70%", size: 8, delay: "1.8s", duration: "2.4s" },
    { left: "67%", top: "61%", size: 7, delay: "2.8s", duration: "2.8s" },
    { left: "82%", top: "68%", size: 9, delay: "0.6s", duration: "2.5s" },
    { left: "94%", top: "59%", size: 6, delay: "1.4s", duration: "3s" },

    { left: "9%", top: "77%", size: 8, delay: "2s", duration: "2.6s" },
    { left: "25%", top: "84%", size: 6, delay: "0.8s", duration: "2.9s" },
    { left: "40%", top: "76%", size: 9, delay: "2.3s", duration: "2.4s" },
    { left: "55%", top: "87%", size: 7, delay: "1.1s", duration: "2.8s" },
    { left: "70%", top: "79%", size: 8, delay: "0.2s", duration: "2.5s" },
    { left: "85%", top: "88%", size: 6, delay: "2.6s", duration: "3s" },
    { left: "97%", top: "78%", size: 8, delay: "1.5s", duration: "2.7s" },

    { left: "5%", top: "94%", size: 7, delay: "1.9s", duration: "2.8s" },
    { left: "18%", top: "91%", size: 9, delay: "0.5s", duration: "2.5s" },
    { left: "33%", top: "96%", size: 6, delay: "2.4s", duration: "3s" },
    { left: "48%", top: "93%", size: 8, delay: "1.3s", duration: "2.6s" },
    { left: "63%", top: "97%", size: 7, delay: "0.7s", duration: "2.9s" },
    { left: "78%", top: "92%", size: 9, delay: "2.1s", duration: "2.4s" },
    { left: "92%", top: "96%", size: 6, delay: "1s", duration: "2.8s" },
  ];

  const mainSparkles = [
    { left: "18%", top: "18%" },
    { left: "76%", top: "20%" },
    { left: "47%", top: "42%" },
    { left: "16%", top: "68%" },
    { left: "82%", top: "72%" },
    { left: "48%", top: "88%" },
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {sparkles.map((sparkle, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #ffffff 0%, #ffffff 25%, #f1f3f5 45%, #cbd0d6 65%, rgba(190,196,204,0.2) 82%, transparent 100%)",
            boxShadow: `
              0 0 7px rgba(255,255,255,1),
              0 0 15px rgba(255,255,255,1),
              0 0 28px rgba(235,238,242,1),
              0 0 45px rgba(210,215,222,0.95),
              0 0 70px rgba(190,196,204,0.7)
            `,
            animation: `sparkleGlow ${sparkle.duration} ease-in-out ${sparkle.delay} infinite`,
            "@keyframes sparkleGlow": {
              "0%, 100%": {
                opacity: 0.3,
                transform: "translate(-50%, -50%) scale(0.5) rotate(0deg)",
                filter: "brightness(1)",
              },
              "25%": {
                opacity: 0.8,
                transform: "translate(-50%, -50%) scale(1) rotate(45deg)",
                filter: "brightness(1.5)",
              },
              "50%": {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(2.1) rotate(90deg)",
                filter: "brightness(2.2)",
              },
              "70%": {
                opacity: 0.75,
                transform: "translate(-50%, -50%) scale(1.2) rotate(135deg)",
                filter: "brightness(1.7)",
              },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: sparkle.size * 10,
              height: 2,
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 15%, #ffffff 50%, rgba(255,255,255,0.2) 85%, transparent 100%)",
              borderRadius: "50%",
              filter: "blur(0.4px)",
              boxShadow: "0 0 10px rgba(255,255,255,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 2,
              height: sparkle.size * 10,
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 15%, #ffffff 50%, rgba(255,255,255,0.2) 85%, transparent 100%)",
              borderRadius: "50%",
              filter: "blur(0.4px)",
              boxShadow: "0 0 10px rgba(255,255,255,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: sparkle.size * 6,
              height: 1.5,
              transform: "translate(-50%, -50%) rotate(45deg)",
              background:
                "linear-gradient(90deg, transparent, #ffffff, transparent)",
              borderRadius: "50%",
              filter: "blur(0.4px)",
              boxShadow: "0 0 7px rgba(255,255,255,0.9)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: sparkle.size * 6,
              height: 1.5,
              transform: "translate(-50%, -50%) rotate(-45deg)",
              background:
                "linear-gradient(90deg, transparent, #ffffff, transparent)",
              borderRadius: "50%",
              filter: "blur(0.4px)",
              boxShadow: "0 0 7px rgba(255,255,255,0.9)",
            }}
          />
        </Box>
      ))}

      {mainSparkles.map((pos, i) => (
        <Box
          key={`main-${i}`}
          sx={{
            position: "absolute",
            left: pos.left,
            top: pos.top,
            width: 15,
            height: 15,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #ffffff 0%, #ffffff 25%, #eef0f2 45%, #c9ced5 65%, rgba(185,192,201,0.2) 82%, transparent 100%)",
            boxShadow: `
              0 0 12px rgba(255,255,255,1),
              0 0 28px rgba(255,255,255,1),
              0 0 50px rgba(225,229,234,1),
              0 0 85px rgba(195,201,210,0.9),
              0 0 120px rgba(175,182,192,0.7)
            `,
            animation: `mainSparkle${i} ${3.5 + i * 0.4}s ease-in-out ${i * 0.6}s infinite`,
            "@keyframes": {
              [`mainSparkle${i}`]: {
                "0%, 100%": {
                  opacity: 0.2,
                  transform: "translate(-50%, -50%) scale(0.45) rotate(0deg)",
                  filter: "brightness(1)",
                },
                "35%": {
                  opacity: 0.85,
                  transform: "translate(-50%, -50%) scale(1.3) rotate(90deg)",
                  filter: "brightness(1.8)",
                },
                "50%": {
                  opacity: 1,
                  transform: "translate(-50%, -50%) scale(2.4) rotate(180deg)",
                  filter: "brightness(2.5)",
                },
                "65%": {
                  opacity: 0.8,
                  transform: "translate(-50%, -50%) scale(1.4) rotate(270deg)",
                  filter: "brightness(1.9)",
                },
                "80%": {
                  opacity: 0.25,
                  transform: "translate(-50%, -50%) scale(0.7) rotate(360deg)",
                  filter: "brightness(1)",
                },
              },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 90,
              height: 2,
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), #ffffff, rgba(255,255,255,0.3), transparent)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 12px rgba(255,255,255,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 2,
              height: 90,
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.3), #ffffff, rgba(255,255,255,0.3), transparent)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 12px rgba(255,255,255,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 65,
              height: 1.5,
              transform: "translate(-50%, -50%) rotate(45deg)",
              background:
                "linear-gradient(90deg, transparent, #ffffff, transparent)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 8px rgba(255,255,255,1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 65,
              height: 1.5,
              transform: "translate(-50%, -50%) rotate(-45deg)",
              background:
                "linear-gradient(90deg, transparent, #ffffff, transparent)",
              filter: "blur(0.5px)",
              boxShadow: "0 0 8px rgba(255,255,255,1)",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
