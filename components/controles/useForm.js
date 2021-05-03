import React, { useState } from "react";
import PropTypes from "prop-types";

const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

useForm.propTypes = {};

export default useForm;
