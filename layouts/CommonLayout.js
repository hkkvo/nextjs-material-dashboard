import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem, Menu, Collapse, Grid } from "@material-ui/core";

//Import Nextjs
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  navItems: {
    textTransform: "none",
    color: "gray",
    fontWeight: 600,
    "&:hover": {
      borderBottom: `2px solid gray`,

      borderRadius: "2px",
    },
  },

  menuItem: {
    fontWeight: 500,
    color: "gray",
    textTransform: "none",

    fontSize: theme.typography.fontSize,
    "&:hover": {
      borderLeft: "2px solid gray",
      fontWeight: "600",
    },
  },
}));

const CommonLayout = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <AppBar
            position='static'
            style={{ backgroundColor: "white", color: "gray" }}
          >
            <Toolbar>
              <Link href='/' style={{ textDecoration: "none" }}>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  style={{ borderRadius: "0px" }}
                >
                  <Image
                    src='/index/new_logo.png'
                    alt='Picture of the author'
                    width={140}
                    height={50}
                  />
                </IconButton>
              </Link>
              <Typography variant='h6' className={classes.title}></Typography>
              <Link href='/' style={{ textDecoration: "none" }}>
                <Button color='inherit' className={classes.navItems}>
                  Home
                </Button>
              </Link>
              <Button
                color='inherit'
                className={classes.navItems}
                onMouseOver={handleMouseOver}
                aria-controls='simple-menu'
              >
                About
              </Button>
              <div>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    About
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    Orginization Structure
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    District Centers
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    Directory
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.menuItem}>
                    RTI
                  </MenuItem>
                </Menu>
              </div>
              <Link href='/services' style={{ textDecoration: "none" }}>
                <Button color='inherit' className={classes.navItems}>
                  services
                </Button>
              </Link>
              <Link href='/login' style={{ textDecoration: "none" }}>
                <Button color='inherit' className={classes.navItems}>
                  Login
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
      {children}
    </Grid>
  );
};

CommonLayout.propTypes = {};

export default CommonLayout;
