import React from "react";
import { Box } from "@mui/material";
import lightbulb from '../../img/lightbulb.png';

interface ThemeChange {
  darkMode: boolean;
  handleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export default function Toggler({ darkMode, handleClick }: ThemeChange) {
  const transition = "all 250ms ease";
  return (
    <Box
      fontSize={"1.5rem"}
      sx={{
        cursor: "pointer",
        ":hover": { transform: "translateY(-3px)", transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          {/* 🌕 */}
          {/* <img src={lightbulb} alt="switch theme icon" width="100" height="100" /> */}
          💡
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          {/* 🌑 */}
          {/* <img src={lightbulb} alt="switch theme icon" width="100" height="100" /> */}
          💡
        </span>
      )}
    </Box>
  );
}
