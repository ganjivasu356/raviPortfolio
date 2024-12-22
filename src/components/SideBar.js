import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import profilePic from "../Assets/Ravi.png";
import { awsCloudList, toolsAndTechnologies } from "./dummy";
import AnimatedChips from "./AnimatedChips";

const SideBar = ({ activeSection }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "30%" }, // 100% width on mobile, 30% on larger screens
        height: "100vh",
        // position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        paddingLeft: { xs: "20px", sm: "80px" }, // Adjust padding based on screen size
        paddingRight: { xs: "20px", sm: "40px" }, // Adjust right padding for mobile
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {/* Name and Occupation */}
        <Box sx={{ marginBottom: "25px", mt: { xs: "10%", sm: "25%" } }}>
          {" "}
          {/* Adjust top margin for smaller screens */}
          <Box
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Avatar
              alt="Ravi Laudya"
              src={profilePic}
              sx={{
                width: 120,
                height: 120,
                border: "2px solid #98A579", // Adding a blue border
              }}
            />
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Ravi Laudya
          </Typography>
          <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
            D e v e l o p m e n t E x p e r t
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textIndent: 50 }}>
            Technology expert with over 19 years of experience in software
            architecture, design, and development utilizing Cloud & AI
            technologies.
          </Typography>
        </Box>

        {/* Tools & Technologies */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: "12px" }}>
            Tools & Technologies
          </Typography>
          <AnimatedChips chipRows={toolsAndTechnologies} />
        </Box>

        {/* AWS Cloud */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: "12px" }}>
            AWS Cloud
          </Typography>
          <AnimatedChips chipRows={awsCloudList} />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
