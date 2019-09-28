import React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { addTask, updateTask, cancel } from "../actions/taskActions";

const TaskForm = ({
  status,
  errors,
  touched,
  isSubmitting,
  addTask,
  history,
  updateTask,
  isUpdating,
  cancel,
  id
}) => {
  useEffect(() => {
    if (status) {
      if (isUpdating) {
        updateTask({
          id,
          ...status
        });
      } else {
        const newTask = {
          id: Date.now(),
          ...status
        };
        addTask(newTask);
      }
      history.push("/task-view");
    }
  }, [status, addTask, history, id, isUpdating, isSubmitting, updateTask]);

  const cancelBtn = () => {
    cancel();
    history.goBack();
  };

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
        component="input"
        name="pointsToEarn"
        type="number"
        placeholder="Points to earn"
      />
      <Field component="input" name="time" type="text" placeholder="Time" />
      <Field component="input" name="img" type="text" placeholder="Image" />
      <Field
        component="textarea"
        name="description"
        type="text"
        placeholder="Description"
      />
      <button type="submit" disabled={isSubmitting}>
        {isUpdating ? "Updating" : "Add new task"}
      </button>
      <button onClick={cancelBtn}>Cancel</button>
    </Form>
  );
};

const TaskFormWithFormik = withFormik({
  mapPropsToValues({
    name,
    locationInput,
    pointsToEarn,
    time,
    img,
    description
  }) {
    return {
      name: name || "",
      locationInput: locationInput || "",
      pointsToEarn: pointsToEarn || "",
      img: img || "",
      description: description || "",
      time: time || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string(),
    time: Yup.string(),
    locationInput: Yup.string(),
    pointsToEarn: Yup.number(),
    img: Yup.string(),
    description: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(TaskForm);

export default connect(
  null,
  { addTask, updateTask, cancel }
)(TaskFormWithFormik);
