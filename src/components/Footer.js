import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        bgcolor: "#1976d2",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
