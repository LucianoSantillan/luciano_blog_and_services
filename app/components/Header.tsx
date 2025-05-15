'use client';

import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { PRIMARY_COLOR } from "../theme";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <section style={{backgroundColor: "#fff",display: "flex", justifyContent: "center"}} id="header" className="header">
      {/* AppBar for the top navigation */}
      <AppBar position="static" className="section-content-max-width" >
        <Toolbar sx={{backgroundColor: PRIMARY_COLOR}}>
          <Image
            src="/logo.png"
            alt="Logo"
            className="header-logo"
            width={40}
            height={40}
          />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ marginLeft: 'auto' }} // Aligns the burger menu to the right
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for the sidebar menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} href="/">
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button component={Link} href="/about">
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button component={Link} href="/contact">
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </section>
  );
}