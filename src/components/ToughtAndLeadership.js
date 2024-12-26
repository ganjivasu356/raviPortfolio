import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import {
  authorshipData,
  membershipsData,
  mentorsData,
  judgingData,
  reviewsData,
} from "./dummy";

const Section = ({ title, data }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          mb: 3,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={3} justifyContent="flex-start">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width: "100%",
                maxWidth: "380px", // Fixed width
                height: "400px", // Fixed height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                },
                margin: "0 auto", // Center the cards
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={item.image} // Image URL from data
                alt={item.title}
                sx={{
                  height: "180px", // Fixed height for the image
                  objectFit: "cover", // Ensures image fits within the given space
                  width: "100%", // Full width
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingBottom: "16px", // Ensures button is properly spaced
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "gray",
                      mb: 1,
                    }}
                  >
                    {item.tagline}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                      mb: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      lineHeight: 1.5,
                      mb: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3, // Limit description to 3 lines
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                    position: "absolute",
                    bottom: "16px", // Ensures proper positioning
                    width: "calc(100% - 32px)", // Fits within the card
                    left: "16px", // Matches padding
                  }}
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ThoughtLeadership = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
        // backgroundColor: "",
        minHeight: "100vh",
      }}
    >
      {/* <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 4,
          fontSize: { xs: "1.5rem", sm: "2rem" },
          textAlign: "center",
        }}
      >
        Published Content
      </Typography> */}
      <Section title="Authorship" data={authorshipData} />
      <Section title="Membership" data={membershipsData} />
      <Section title="Mentors" data={mentorsData} />
      <Section title="Judging" data={judgingData} />
      <Section title="Reviews" data={reviewsData} />
    </Box>
  );
};

export default ThoughtLeadership;
