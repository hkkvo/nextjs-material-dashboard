import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "green",
  },
}));

const PageHeader = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {title}
      <br />
      {subtitle}
      <br />
    </Paper>
  );
};

PageHeader.propTypes = {};

export default PageHeader;
