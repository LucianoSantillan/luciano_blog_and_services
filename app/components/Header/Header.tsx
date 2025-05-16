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
import { PRIMARY_COLOR, PRIMARY_COLOR_2 } from "@/app/theme";
import Link from "@/app/design_system/Link/Link"; // Updated to use custom Link component
import { fontSizes } from "@/app/design_system/Text/Headings/shared/fontSizes";

interface HeaderProps {
  translations: {
    services: string;
    blog: string;
    contact: string;
    contactId: string;
    servicesId: string;
    blogId: string;
  };
}

export default function Header({ translations }: HeaderProps) {
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
            <Link href={`/${translations.servicesId}`} passHref style={{ fontSize: fontSizes.sm }}>
              {translations.services}
            </Link>
            <Link href={`/${translations.blogId}`} passHref style={{ fontSize: fontSizes.sm }}>
              {translations.blog}
            </Link>
            <Link href={`/${translations.contactId}`} passHref style={{ fontSize: fontSizes.sm }}>
              {translations.contact}
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
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
              padding: 0,
            }}
          >
            <Link
              href={`/${translations.servicesId}`}
              style={{
                display: "block",
                width: "100%",
                padding: "16px",
                color: "inherit",
                textDecoration: "none",
                fontSize: fontSizes.sm,
              }}
            >
              <ListItemText
                primary={translations.services}
                sx={{ fontSize: fontSizes.sm }}
              />
            </Link>
          </ListItem>
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
              padding: 0,
            }}
          >
            <Link
              href={`/${translations.blogId}`}
              style={{
                display: "block",
                width: "100%",
                padding: "16px",
                color: "inherit",
                textDecoration: "none",
                fontSize: fontSizes.sm,
              }}
            >
              <ListItemText
                primary={translations.blog}
                sx={{ fontSize: fontSizes.sm }}
              />
            </Link>
          </ListItem>
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: PRIMARY_COLOR, // Add hover effect
              },
              padding: 0,
            }}
          >
            <Link
              href={`/${translations.contactId}`}
              style={{
                display: "block",
                width: "100%",
                padding: "16px",
                color: "inherit",
                textDecoration: "none",
                fontSize: fontSizes.sm,
              }}
            >
              <ListItemText
                primary={translations.contact}
                sx={{ fontSize: fontSizes.sm }}
              />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </section>
  );
}