import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import articleImg from "../Assets/artone.jpg";
import articleImgTwo from "../Assets/arttwo.jpg";

const ArticlesSection = () => {
  return (
    <>
      <Box sx={{ mt: 4 }}>
        {/* Image Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          width="100%"
          height={{ xs: "auto", md: "500px" }}
          position="relative"
        >
          {/* First Image */}
          <Box
            component="img"
            src={articleImg}
            alt="Salon Interior"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "300px", md: "100%" },
              objectFit: "cover",
            }}
          />

          {/* Second Image */}
          <Box
            component="img"
            src={articleImgTwo}
            alt="Spa Treatment"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "300px", md: "100%" },
              objectFit: "cover",
            }}
          />

          {/* Overlay Content */}
          <Card
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              width: { xs: "90%", sm: "70%", md: "40%" },
              textAlign: "center",
              p: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={"bold"}
              gutterBottom
            >
              Articles
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row", md: "column" }}
              gap={2}
              justifyContent="center"
              sx={{ mb: 2 }}
            >
              <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
                Welcome to the articles section of my portfolio, where I share
                insights and expertise garnered from years of writing for
                prestigious platforms like Forbes and Hackathon. My articles are
                a reflection of my passion for innovation, problem-solving, and
                thought leadership.
              </Typography>
              <Button
                variant="contained"
                component={Link} // Use Link for navigation
                to="/articles" // Specify the route
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "primary.main",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  position: "absolute",
                  bottom: "16px",
                  width: "calc(100% - 32px)",
                  left: "16px",
                }}
              >
                Read More
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default ArticlesSection;
