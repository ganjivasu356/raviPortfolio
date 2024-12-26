import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ExperienceSection = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/experience");
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "#f9f9f9",
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Work Experience
      </Typography>
      <Box sx={{ width: "70%" }}>
        <Typography variant="body1" gutterBottom>
          This section highlights my professional journey, showcasing the roles
          I’ve undertaken, the skills I’ve honed, and the impact I’ve made in
          various industries. From contributing to key projects and achieving
          measurable results to collaborating with diverse teams, my experience
          reflects my dedication to growth and excellence in every role.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 4 }}
          onClick={handleKnowMore}
        >
          Know More
        </Button>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
