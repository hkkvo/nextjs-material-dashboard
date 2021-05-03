import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SidebarListIteam from "./SidebarListIteam";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  text: {
    fontSize: "14px",
    fontWeight: "520",
  },
}));

const text = {
  fontSize: "14px",
  fontWeight: "520",
};

const Foo = function (props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      // backgroundColor: theme.palette.primary.dark,
      borderLeft: "2px solid blue",
    },

    nested: {
      paddingLeft: theme.spacing(4),
    },
    listText: {
      fontSize: `14px`,
      fontWeight: `520`,
    },

    listWrap: {
      fontSize: "12px",
      fontWeight: "bold",
      cursor: "pointer",
      "&:hover": {
        borderRight: "2px solid blue",
        color: "blue",
        borderRadius: `2px`,
        background: `rgba(57,57,251,.05)`,
        boxShadow: `-1px 1px 2px #b8b8b8,
        1px -1px 2px #ffffff`,
      },
    },
    sidebarIcon: { fontSize: "16px", color: `rgba(57,57,250,.8)` },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <SidebarListIteam text='Home' icon='home' />
      <SidebarListIteam text='Member' icon='person_add' />
      <SidebarListIteam text='Employee' icon='people' />
      <SidebarListIteam text='Group Members' icon='group' />
      <SidebarListIteam text='Send SMS' icon='sms_outline' />
      <SidebarListIteam text='Report' icon='assessment_outline' />
    </div>
  );
};

export const mainListItems = <Foo />;
