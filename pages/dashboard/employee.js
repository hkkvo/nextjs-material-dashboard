import PropTypes from "prop-types";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
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
      <Typography>Page From Employee</Typography>
    </div>
  );
};

employee.propTypes = {};

employee.Layout = DashboardLayout;

export default employee;
