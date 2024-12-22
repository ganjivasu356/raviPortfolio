import { Box, Typography } from "@mui/material";
import React from "react";
import {
  authorshipData,
  membershipsData,
  mentorsData,
  reviewsData,
  judgingData,
} from "./dummy";

const Section = ({ title, data }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} // Responsive font size
      >
        {title}
      </Typography>
      {data.map((item, index) => {
        const isLinkEmpty = !item.link;
        return (
          <Typography
            component={isLinkEmpty ? "span" : "a"}
            href={isLinkEmpty ? undefined : item.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="body1"
            key={index}
            sx={{
              marginTop: "10px",
              display: "list-item",
              listStyleType: "disc",
              marginLeft: "34px",
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                color: isLinkEmpty ? "inherit" : "#077dc2",
                cursor: isLinkEmpty ? "default" : "pointer",
              },
              fontSize: { xs: "0.875rem", sm: "1rem" }, // Adjust font size for different screen sizes
            }}
          >
            {item.title}
          </Typography>
        );
      })}
    </Box>
  );
};

const ThoughtLeadership = () => {
  return (
    <Box sx={{ mb: 2, px: { xs: 2, sm: 4, md: 6 } }}>
      {/* Padding adjusts based on screen size */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 4,
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Adjust font size for larger screens
        }}
      >
        Thought Leadership
      </Typography>
      <Section title="Authorship" data={authorshipData} />
      <Section title="Memberships" data={membershipsData} />
      <Section title="Mentorship" data={mentorsData} />
      <Section title="Reviews" data={reviewsData} />
      <Section title="Judging" data={judgingData} />
    </Box>
  );
};

export default ThoughtLeadership;
