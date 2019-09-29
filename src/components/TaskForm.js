import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import axios from 'axios';

import { addTask, updateTask, cancel } from '../actions/taskActions';
import {
  FormContainer,
  FormButton,
  CancelButton,
  ImagePreview
} from './FormStyles';

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
  id,
  img
}) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(img);
  useEffect(() => {
    if (status) {
      if (isUpdating) {
        updateTask({
          id,
          img: image,
          ...status
        });
      } else {
        addTask({
          id: Date.now(),
          img: image,
          ...status
        });
      }

      history.push('/task-view');
    }
  }, [
    status,
    addTask,
    history,
    id,
    isUpdating,
    isSubmitting,
    updateTask,
    image
  ]);
  const uploadImage = async e => {
    const img = e.target.files;
    const data = new FormData();
    data.append('file', img[0]);
    data.append('upload_preset', 'zaqsyfht');
    setLoading(true);
    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dycgfls0e/image/upload',
        data
      );
      console.log(res);
      setImage(res.data.secure_url);
      setLoading(false);
    } catch ({ message }) {
      console.error(message);
    }
  };
  const cancelBtn = () => {
    cancel();
    history.goBack();
  };
  return (
    <FormContainer bgColor="#e9b44c">
      <h1>Create a new task</h1>
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
        <Field component="input" name="time" type="text" placeholder="Time" />
        <Field
          component="input"
          name="pointsToEarn"
          type="number"
          placeholder="Points to earn"
        />
        <input
          component="input"
          name="img"
          type="file"
          placeholder="Image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          image.length > 0 && <ImagePreview src={image} alt="Task image" />
        )}
        <Field
          component="textarea"
          name="description"
          type="textarea"
          placeholder="Description"
        />
        <FormButton
          type="submit"
          disabled={isSubmitting}
          bgColor="#9b2915"
          hoverColor="#1c110a"
        >
          {' '}
          {isUpdating ? 'Update task' : 'Add new task'}
        </FormButton>
      </Form>
      <CancelButton onClick={cancelBtn} bgColor="#9b2915" hoverColor="#1c110a">
        Cancel
      </CancelButton>
    </FormContainer>
  );
};

const TaskFormWithFormik = withFormik({
  mapPropsToValues({
    name,
    locationInput,
    time,
    pointsToEarn,
    img,
    description
  }) {
    return {
      name: name || '',
      locationInput: locationInput || '',
      time: time || '',
      pointsToEarn: pointsToEarn || '',
      description: description || '',
      img: img || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string(),
    time: Yup.string(),
    locationInput: Yup.string(),
    pointsToEarn: Yup.number(),
    description: Yup.string()
  }),

  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(TaskForm);

const mapStateToProps = state => {
  return {
    isUpdating: state.taskReducer.isUpdating,
    id: state.taskReducer.id,
    name: state.taskReducer.name,
    locationInput: state.taskReducer.locationInput,
    time: state.taskReducer.time,
    pointsToEarn: state.taskReducer.pointsToEarn,
    img: state.taskReducer.img,
    description: state.taskReducer.description
  };
};

export default connect(
  mapStateToProps,
  { addTask, updateTask, cancel }
)(TaskFormWithFormik);
