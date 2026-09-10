import { Box, Stack, Typography } from "@mui/material";
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
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
    const interval = window.setInterval(calculate, 1000);
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
        maxWidth: 500,
        mx: "auto",
        mt: 1,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0.5}
      >
        {items.map((item, index) => (
          <Box
            key={item.label}
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            <Box sx={{ textAlign: "center", minWidth: { xs: 55, sm: 70 } }}>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#b08d6a",
                  fontSize: { xs: 48, sm: 60 },
                  lineHeight: 1,
                  fontWeight: 600,
                }}
              >
                {String(item.value).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8d5967",
                  fontSize: { xs: 9, sm: 10 },
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  mt: 0.5,
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Typography>
            </Box>

            {index < items.length - 1 && (
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#b08d6a",
                  fontSize: { xs: 48, sm: 60 },
                  fontWeight: 600,
                  lineHeight: 1,
                  mt: 0.2,
                }}
              >
                :
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
