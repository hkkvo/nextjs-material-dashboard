import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../layouts/CommonLayout";
import { Typography } from "@material-ui/core";

const services = (props) => {
  return (
    <div>
      <Typography variant='h5'>Hello From service Page</Typography>
    </div>
  );
};

services.propTypes = {};

services.Layout = CommonLayout;

export default services;
