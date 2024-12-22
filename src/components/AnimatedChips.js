import React, { useEffect } from "react";
import { Box, Chip } from "@mui/material";

const AnimatedChips = ({ chipRows, speed = 20 }) => {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes scrollRight {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      @keyframes scrollLeft {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {chipRows.map((row, rowIndex) => {
        // Duplicate the row to make the animation seamless
        const duplicatedRow = [...row, ...row, ...row];

        return (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              gap: 2,
              whiteSpace: "nowrap", // Prevent wrapping
              overflow: "hidden", // Hide overflow
              width: "100%", // Ensure the container is wide enough
              animation: `${
                rowIndex % 2 === 0 ? "scrollRight" : "scrollLeft"
              } ${speed}s linear infinite`,
            }}
          >
            {duplicatedRow.map((chip, chipIndex) => (
              <Chip
                key={chipIndex}
                label={chip}
                // color="primary"
                sx={{
                  whiteSpace: "nowrap", // Prevent chip text from wrapping
                  background: "#dae3de",
                }}
              />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

export default AnimatedChips;
