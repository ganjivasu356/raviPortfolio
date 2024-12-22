import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import ExperienceSection from "./ExperienceSection";
import SideBar from "./SideBar";
import AwardAndRecognition from "./AwardAndRecognition";
import ToughtAndLeadership from "./ToughtAndLeadership";
import About from "./About";

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
        display: "flex",
        minHeight: "100vh",
        background: "#f3f2ee",
        fontFamily: "'Roboto', sans-serif",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
        position: "relative", // Ensure elements are within bounds
      }}
    >
      {/* Left Section: Fixed Sidebar */}
      {/* <Box
        sx={{
          // width: { xs: "100%", sm: "30%" }, // Full width on mobile, 30% on larger screens
          position: { xs: "static", sm: "sticky" },
          top: { sm: 0 },
          display: "flex",
          flexDirection: "column",
          paddingLeft: { xs: "20px", sm: "80px" },
          paddingRight: { xs: "20px", sm: "40px" },
          mb: { xs: "20px", sm: 0 }, // Add margin for mobile screens
          zIndex: 1, // Ensure sidebar is above other content on small screens
        }}
      > */}
      <SideBar activeSection={activeSection} />
      {/* </Box> */}

      {/* Right Section: Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          padding: { xs: "20px", sm: "80px 50px" },
          overflowY: "auto",
          height: "100vh", // Ensure content area takes full height
          zIndex: 0, // Ensure content is below the sidebar
        }}
      >
        {/* About Section */}
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        {/* Experience Section */}
        <div id="experience" ref={experienceRef}>
          <ExperienceSection />
        </div>
        {/* Projects Section */}
        <div id="projects" ref={projectsRef}>
          <AwardAndRecognition />
        </div>
        <div id="thoughts">
          <ToughtAndLeadership />
        </div>
      </Box>
    </Box>
  );
};

export default Home;
