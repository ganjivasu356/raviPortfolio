import React from "react";
import { Typography } from "@mui/material";

function ProfileSection({ projectsRef }) {
  return (
    <section id="projects" ref={projectsRef}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Typography variant="body1" sx={{}}>
        I have worked on a variety of projects involving JavaScript, React, and
        building responsive, interactive web applications.
      </Typography>
    </section>
  );
}

export default ProfileSection;
