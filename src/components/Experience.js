import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import { experienceData } from "./dummy";

const Experience = ({ experienceRef }) => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 12,
        minHeight: "100vh",
        margin: "0 auto", // Center the cards
        justifyContent: "center",
        display: "flex",
      }}
    >
      <section id="experience" ref={experienceRef}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 3,
            mt: { xs: 3, md: 5 },
            ml: { xs: 2, md: 4 },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Experience
        </Typography>
        <Stepper
          orientation="vertical"
          sx={{
            "& .MuiStepLabel-label": {
              fontWeight: "bold",
              paddingLeft: { xs: 1, md: 2 }, // Adjust padding for smaller screens
            },
            "& .MuiStepContent-root": {
              borderLeft: "2px solid #ccc",
              paddingLeft: { xs: 1, md: 2 }, // Adjust padding for smaller screens
            },
          }}
        >
          {experienceData.map((exp, index) => (
            <Step key={index} active>
              <StepLabel>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} // Responsive font size
                >
                  {`${exp.designation} | ${exp.company}`}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "gray",
                    fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font size
                  }}
                >
                  {exp.timePeriod}
                </Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ marginLeft: { xs: 1, md: 2 } }}>
                  {exp.rolesAndResp.map((role, idx) => (
                    <Typography
                      variant="body1"
                      key={idx}
                      sx={{
                        marginTop: "10px",
                        display: "list-item",
                        listStyleType: "disc",
                        marginLeft: "20px",
                        fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font size
                      }}
                    >
                      {role}
                    </Typography>
                  ))}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </section>
    </Box>
  );
};

export default Experience;
