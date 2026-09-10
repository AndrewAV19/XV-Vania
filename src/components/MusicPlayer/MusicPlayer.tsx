import React, { useState, useRef, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  VolumeUp as VolumeIcon,
} from "@mui/icons-material";

interface MusicPlayerProps {
  text?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  text = "ESCUCHA MI CANCIÓN FAVORITA" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const songUrl = "/musicaboda.mp3";

  useEffect(() => {
    audioRef.current = new Audio(songUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const handleCanPlay = () => setIsAudioReady(true);
    const handleError = (error: any) => {
      console.error("Error cargando el audio:", error);
      setIsAudioReady(false);
    };

    audioRef.current.addEventListener("canplay", handleCanPlay);
    audioRef.current.addEventListener("error", handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("canplay", handleCanPlay);
        audioRef.current.removeEventListener("error", handleError);
        audioRef.current = null;
      }
    };
  }, [songUrl]);

  useEffect(() => {
    const autoplay = async () => {
      if (audioRef.current && isAudioReady) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay bloqueado por el navegador:", error);
        }
      }
    };
    autoplay();
  }, [isAudioReady]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error reproduciendo audio:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        mb: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#b08d6a",
          fontSize: { xs: 10, sm: 12 },
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          backgroundColor: "rgba(235, 190, 200, 0.65)",
          backdropFilter: "blur(8px)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1.5, sm: 2 },
          py: 1,
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <IconButton
          onClick={togglePlay}
          sx={{
            color: "#ffffff",
            p: 0.5,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
          }}
        >
          {isPlaying ? <PauseIcon fontSize="small" /> : <PlayIcon fontSize="small" />}
        </IconButton>

        <Box
          sx={{
            flex: 1,
            height: 2,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            mx: 1.5,
            borderRadius: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: isPlaying ? "35%" : "0%",
              backgroundColor: "#ffffff",
              transition: "width 1s linear",
            }}
          />
        </Box>

        <IconButton
          sx={{
            color: "#ffffff",
            p: 0.5,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
          }}
        >
          <VolumeIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MusicPlayer;