import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import { Typography } from "@material-ui/core";

const dashboard = (props) => {
  return (
    <div>
      <Typography variant='h5'>Welocme From Dashboard</Typography>
    </div>
  );
};

dashboard.propTypes = {};

dashboard.Layout = DashboardLayout;

export default dashboard;
