import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import ExperienceSection from "./ExperienceSection";
import IntroSection from "./IntroSection";
import ArticlesSection from "./ArticlesSection";
import AwardSection from "./AwardSection";

// Scroll Highlight Component
const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Refs for sections
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const options = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, options);

    // Observe each section if ref.current exists
    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <Box
      sx={{
        background: "#f3f2ee",
        fontFamily: "'Roboto', sans-serif",
        // flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
        // position: "relative", // Ensure elements are within bounds
      }}
    >
      <IntroSection />
      <ArticlesSection />
      <ExperienceSection />
      <AwardSection />
    </Box>
  );
};

export default Home;
