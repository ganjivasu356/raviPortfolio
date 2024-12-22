import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State to handle menu open/close
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle menu toggle
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #f8f9fc)",
        color: "#333",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "0 16px",
      }}
    >
      <Toolbar>
        {/* Logo or Title Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#555",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Ravi Laudya
          </Typography>
        </Box>

        {/* Navigation Links for Large Screens */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}
          >
            {["Home", "About", "Projects", "Contact"].map((navItem) => (
              <Typography
                key={navItem}
                variant="body1"
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": { color: "#666" },
                }}
              >
                {navItem}
              </Typography>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isMobile ? (
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: "#555" }} />
            </IconButton>
          ) : null}
        </Box>

        {/* Mobile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          keepMounted
        >
          {["Home", "About", "Projects", "Contact"].map((menuItem) => (
            <MenuItem key={menuItem} onClick={handleMenuClose}>
              {menuItem}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
