import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  TypeScript,
  makeStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { setCookie } from "nookies";
import Router from "next/router";

const useStryles = makeStyles((theme) => ({
  margin: theme.spacing(2),
  root: {
    "& .MuiFormControl-root": { width: "100%", margin: theme.spacing(1) },
  },
}));

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("User Name is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = async (values) => {
  // alert(JSON.stringify(values, null, 2));

  const login = await fetch(`http://localhost:8080/authenticate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const loginResponse = await login.json();

  setCookie(null, "jwt", loginResponse.jwt, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  Router.push("/dashboard");
};

const LoginForm = (props) => {
  const classes = useStryles();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <Grid container justify='center'>
        <Typography variant='h5' style={{ fontWeight: 600 }} color='secondary'>
          Login
        </Typography>
        <TextField
          variant='outlined'
          label='username'
          type='text'
          size='small'
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          {...formik.getFieldProps("username")}
        />

        <TextField
          variant='outlined'
          label='password'
          type='password'
          size='small'
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps("password")}
        />

        <Button
          style={{
            fontWeight: 600,
          }}
          variant='contained'
          color='secondary'
          type='submit'
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
