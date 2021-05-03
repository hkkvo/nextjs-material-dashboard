import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import { CssBaseline, makeStyles, withStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  menuIteam: {
    fontSize: "12px",
    fontWeight: "520",
    "&:hover": {
      color: "blue",
      fontWeight: "520",
      backgroundColor: `rgba(51,51,251,.1)`,

      borderRight: `1px solid blue`,
      borderRadius: "1px",
    },
  },
}));

export default function UserSettingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyle();
  return (
    <>
      <IconButton
        aria-controls='grow-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <SettingsApplicationsIcon style={{ color: "white" }} />
      </IconButton>
      <Menu
        id='grow-menu'
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose} className={classes.menuIteam}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuIteam}>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuIteam}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
