import PropTypes from "prop-types";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "../../components/Empolyee/EmployeeForm";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: "#e6e6e6",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const employee = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Paper style={{ height: "20vh" }}></Paper>
      <Paper className={classes.pageContainer} elevation={3}>
        <EmployeeForm />
      </Paper>
    </div>
  );
};

employee.propTypes = {};

employee.Layout = DashboardLayout;

export default employee;
