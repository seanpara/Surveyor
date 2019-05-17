import React from "react";

const SurveyForm = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  )
};
export default SurveyForm;
