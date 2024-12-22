import React from "react";
import { Box, Typography, Stack, Card, Button } from "@mui/material";
import ContactLinks from "./ContactLinks";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Card
        sx={{
          maxWidth: "800px",
          width: "100%",
          padding: { xs: "1.5rem", sm: "2rem" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
          },
          borderRadius: "8px",
          background: "#dae3de",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "gray",
              fontWeight: 400,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            WELCOME TO MY WORLD
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              marginTop: "0.5rem",
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
            }}
          >
            Hi, I’m
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.75rem" },
              marginTop: "1rem",
            }}
          >
            a Development Expert.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "1.5rem",
              maxWidth: "600px",
              marginX: "auto",
              textIndent: 50,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            I am a technology expert with over 19 years of experience in
            software architecture, design, and development utilizing cloud & AI
            technologies. My expertise lies in building cloud-based applications
            for enterprises, prioritizing scalability, reliability, security,
            and performance. As a former CTO for a startup, I successfully
            spearheaded initiatives that transformed innovative concepts into
            market-ready solutions. I have collaborated with several innovative
            startups that achieved acquisition and went public.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "2rem" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                marginBottom: 1,
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              FIND WITH ME
            </Typography>
            <ContactLinks />
          </Box>

          {/* Button to download resume */}
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              href="/Ravi_Resume.pdf"
              download="Ravi_Resume.pdf" // Sets the downloaded file name
              sx={{
                textTransform: "none",
                padding: "0.5rem 1.5rem",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default About;
