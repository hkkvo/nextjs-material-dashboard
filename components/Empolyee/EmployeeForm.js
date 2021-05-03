import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useForm from "../controles/useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  departmentmentId: "",
  hireDate: new Date(),
  isperment: false,
};

const EmployeeForm = (props) => {
  const classes = useStyles();

  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Full Name'
            name='fullname'
            value={values.fullname}
            size='small'
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='email'
            name='email'
            value={values.email}
            size='small'
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

EmployeeForm.propTypes = {};

export default EmployeeForm;
