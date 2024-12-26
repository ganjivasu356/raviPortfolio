import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { menuItems } from "../utility/constants";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md")); // Check for mobile view
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = (route) => {
    navigate(route); // Navigate to the specified route
    if (isMobile) {
      setDrawerOpen(false); // Close the drawer on mobile after navigation
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ marginTop: "12px" }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleNavigate(item.route)} // Call handleNavigate
                sx={{
                  color: "primary.main",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                  letterSpacing: "1.5px", // Add letter spacing
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            // backgroundColor: "#333",
            height: "100%",
            // color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Close Button */}
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "black" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.route)}>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      textAlign: "center",
                      color: "white",
                      letterSpacing: "2px", // Add letter spacing
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer Text in Drawer */}
          <Box p={2}>
            <Typography variant="body2" textAlign="center">
              © 2025 Ravi Laudya
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
