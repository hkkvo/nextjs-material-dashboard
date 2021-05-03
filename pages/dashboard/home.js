import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const home = (props) => {
  return (
    <div>
      <Typography>Hello From Dashboard Home</Typography>
    </div>
  );
};

home.propTypes = {};

home.Layout = DashboardLayout;

export default home;
