import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";

const member = (props) => {
  return (
    <div>
      <Typography variant='h5'>Page From Member DashBoard</Typography>
    </div>
  );
};

member.propTypes = {};

member.Layout = DashboardLayout;

export default member;
