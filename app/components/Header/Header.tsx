'use client';

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { Box } from "@mui/material";
import { PRIMARY_COLOR, PRIMARY_COLOR_2 } from "../../theme";
import Link from "../../design_system/Link/Link"; // Updated to use custom Link component
import Heading3 from "@/app/design_system/Text/Headings/Heading3/Heading3"; // Replace Typography with Heading3

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <section
      style={{
        backgroundColor: PRIMARY_COLOR_2,
        display: "flex",
        justifyContent: "center",
      }}
      id="header"
      className="header"
    >
      {/* AppBar for the top navigation */}
      <AppBar elevation={0} position="static" className="section-content-max-width">
        <Toolbar sx={{ backgroundColor: PRIMARY_COLOR_2 }}>
          <Link href="/" passHref>
            <div style={{ cursor: "pointer" }}>
              <Image
                src="/logo.png"
                alt="Logo"
                className="header-logo"
                width={80} // Increased width
                height={80} // Increased height
              />
            </div>
          </Link>
          {/* Menu items for larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hidden on small screens, visible on medium and larger screens
              marginLeft: "auto",
              gap: 3,
            }}
          >
            <Link href="/#servicios" passHref>
              <Heading3
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Servicios
              </Heading3>
            </Link>
            <Link href="/blog" passHref>
              <Heading3
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Blog
              </Heading3>
            </Link>
            <Link href="/#contacto" passHref>
              <Heading3
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Contacto
              </Heading3>
            </Link>
          </Box>
          {/* Burger menu for smaller screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, marginLeft: "auto" }} // Visible on small screens, hidden on medium and larger screens
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for the sidebar menu */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: PRIMARY_COLOR_2, // Match the theme color
            color: "white", // Ensure text is readable
          },
        }}
      >
        <List sx={{ width: 250, padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <ListItem
            button
            component={Link}
            href="/"
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
            }}
          >
            <ListItemText
              primary={
                <Heading3 className="text-white">Servicios</Heading3>
              }
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/blog"
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
            }}
          >
            <ListItemText
              primary={
                <Heading3 className="text-white">Blog</Heading3>
              }
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            href="/contact"
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
            }}
          >
            <ListItemText
              primary={
                <Heading3 className="text-white">Contacto</Heading3>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </section>
  );
}