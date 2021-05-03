import React from "react";
import PropTypes from "prop-types";
import ToolTipContext from "../../../context/dashboard/ToolTipContext";
import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  listWrap: {
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    borderBottom: `1px solid  	#DCDCDC`,
    "&:hover": {
      borderRadius: `2px`,
      background: `rgba(57,57,251,.05)`,
      boxShadow: `-1px 1px 2px #b8b8b8,
      1px -1px 2px #ffffff`,
      borderRight: "2px solid blue",

      "& $listIcon": {
        color: "blue",
        // boxShadow: `-1px 1px 2px #b8b8b8,1px -1px 2px #ffffff`,
        backgroundColor: `white`,
      },
      "& $listText": {
        fontWeight: `520`,
        color: "blue",
      },
    },
  },
  listText: { fontSize: `14px` },
  listIcon: {
    fontSize: "16px",
    color: `rgba(57,57,250,.8)`,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontWeight: 600,
    color: "blue",
  },
  arrow: {
    color: theme.palette.common.white,
  },
}));

const SidebarListIteam = ({ icon, text }) => {
  const classes = useStyles();

  const link = "/dashboard".concat("/").concat(text.toLowerCase());
  return (
    <ToolTipContext.Consumer>
      {(value) => {
        return (
          <Link href={link}>
            <Tooltip
              title={value ? text : ""}
              placement='right'
              classes={{ tooltip: classes.tooltip }}
            >
              <ListItem button className={classes.listWrap}>
                <ListItemIcon>
                  <Icon className={classes.listIcon}>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography className={classes.listText}>{text}</Typography>
                  }
                />
              </ListItem>
            </Tooltip>
          </Link>
        );
      }}
    </ToolTipContext.Consumer>
  );
};

SidebarListIteam.prototype = {};

export default SidebarListIteam;
