import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import CommonLayout from "../layouts/CommonLayout";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: "400px",

    padding: theme.spacing(3),
  },
}));

const login = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{ height: "80vh" }}
      justify='center'
      alignItems='center'
    >
      <Paper className={classes.pageContent}>
        <LoginForm />
      </Paper>
    </Grid>
  );
};

login.propTypes = {};
login.Layout = CommonLayout;

export default login;
