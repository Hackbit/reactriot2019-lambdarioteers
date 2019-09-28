import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { addTask } from "../actions/taskActions";

const TaskForm = ({
  status,
  errors,
  touched,
  isSubmitting,
  addTask,
  history
}) => {
  useEffect(() => {
    if (status) {
      const newTask = {
        id: Date.now(),
        ...status
      };
      addTask(newTask);
      history.push("/task-view");
    }
  }, [status, addTask, history]);

  return (
    <Form>
      <Field
        component="input"
        name="name"
        type="text"
        placeholder="Name of task"
      />
      <Field
        component="input"
        name="locationInput"
        type="text"
        placeholder="Location"
      />
      <Field
        component="textarea"
        name="description"
        type="text"
        placeholder="Describe task"
      />
      <Field
        component="input"
        name="pointsToEarn"
        type="number"
        placeholder="Points to earn"
      />
      <Field component="input" name="img" type="text" placeholder="Image" />
      <button disabled={isSubmitting}>Add new task</button>
    </Form>
  );
};

const TaskFormWithFormik = withFormik({
  mapPropsToValues({ name, locationInput, pointsToEarn, img }) {
    return {
      name: name || "",
      locationInput: locationInput || "",
      pointsToEarn: pointsToEarn || "",
      img: img || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string(),
    locationInput: Yup.string(),
    pointsToEarn: Yup.number(),
    img: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(TaskForm);

export default connect(
  null,
  { addTask }
)(TaskFormWithFormik);
