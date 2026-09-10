import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const difference = new Date(targetDate).getTime() - Date.now();

      if (difference <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculate();

    const interval = window.setInterval(() => {
      calculate();
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = [
    { value: time.days, label: "DÍAS" },
    { value: time.hours, label: "HORAS" },
    { value: time.minutes, label: "MINUTOS" },
    { value: time.seconds, label: "SEGUNDOS" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 310,
        mx: "auto",
        mt: 2,
        border: "1px solid rgba(158,92,107,0.45)",
        borderRadius: "4px",
        px: { xs: 1.5, sm: 2 },
        py: 1.5,
        background: "rgba(255,250,248,0.55)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "rgba(158,92,107,0.2)",
            }}
          />
        }
      >
        {items.map((item) => (
          <Box
            key={item.label}
            sx={{
              flex: 1,
              textAlign: "center",
              px: 0.6,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#a86b79",
                fontSize: { xs: 20, sm: 24 },
                lineHeight: 1,
                fontWeight: 500,
              }}
            >
              {String(item.value).padStart(2, "0")}
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#8d5967",
                fontSize: { xs: 7, sm: 8 },
                letterSpacing: "0.1em",
                mt: 0.5,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
