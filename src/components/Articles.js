import React from "react";
import { Box, Typography } from "@mui/material";
import ThoughtLeadership from "./ToughtAndLeadership";

const Articles = () => {
  return (
    <Box>
      <Box
        sx={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "flex-start",
          padding: "64px 96px",
          //   backgroundColor: "#f9f6f1",
          //   minHeight: "100vh",
        }}
      >
        {/* Articles Section */}
        <Box sx={{ flex: 2, paddingRight: "48px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "24px",
              fontSize: "36px",
              lineHeight: "1.5",
              // color: "#222",
            }}
          >
            Articles
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              // color: "#555",
              lineHeight: "1.8",
              marginBottom: "24px",
            }}
          >
            Through my articles, I share insights and experiences as a
            development expert. From hackathons to contributions on platforms
            like The Cube and others, this collection reflects my passion for
            coding, innovation, and collaboration. Explore practical tips,
            success stories, and lessons learned from the world of development.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              // color: "#555",
              lineHeight: "1.8",
            }}
          >
            I’ve penned articles for platforms like Hackathon and The Cube,
            capturing moments of growth, discovery, and success. This space
            gathers those stories, sharing perspectives on programming,
            collaboration, and the ever-evolving tech landscape.
          </Typography>
        </Box>
        <ThoughtLeadership />

        {/* Subscription Section */}
        {/* <Box sx={{ flex: 1 }}>
        <Card
          sx={{
            backgroundColor: "#fff8e1",
            border: "1px solid #f2e5c9",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "24px",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "24px",
                lineHeight: "1.5",
                color: "#222",
              }}
            >
              Self-improvement tips based on proven scientific research.
            </Typography>
            <TextField
              fullWidth
              placeholder="My email address is..."
              variant="outlined"
              sx={{
                marginBottom: "16px",
                backgroundColor: "#fff",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ddd",
                  },
                  "&:hover fieldset": {
                    borderColor: "#bbb",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#aaa",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#fbbf24",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "12px",
                "&:hover": {
                  backgroundColor: "#f59e0b",
                },
              }}
            >
              Try the free newsletter
            </Button>
            <Typography
              variant="body2"
              sx={{
                marginTop: "16px",
                fontSize: "14px",
                color: "#666",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              No spam. Just the highest quality ideas you’ll find on the web.
            </Typography>
          </CardContent>
        </Card>
      </Box> */}
      </Box>
    </Box>
  );
};

export default Articles;
