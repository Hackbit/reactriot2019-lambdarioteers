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
  img,
  users
}) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(img);
  let user = users.filter(user => user.id === +localStorage.getItem('id'))[0];
  console.log(user.id);
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
          user_id: user.id,
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
        <div className="img-submission">
          <button>Upload Image</button>
          <Field
            component="input"
            name="img"
            type="file"
            placeholder="Image"
            onChange={uploadImage}
            style={{
              opacity: '0',
              zIndex: '2',
              width: '100%'
            }}
          />
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            image.length > 0 && <ImagePreview src={image} alt="Task image" />
          )}
        </div>
        <Field
          component="textarea"
          name="description"
          type="text"
          placeholder="Description"
        />
        <FormButton
          type="submit"
          disabled={isSubmitting}
          bgColor="#9b2915"
          hoverColor="#1c110a"
        >
          {' '}
          {isUpdating ? 'Updating' : 'Add new task'}
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
      description: description || ''
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
    points: state.taskReducer.pointsToEarn,
    img: state.taskReducer.img,
    description: state.taskReducer.description,
    users: state.userReducer.users
  };
};

export default connect(
  mapStateToProps,
  { addTask, updateTask, cancel }
)(TaskFormWithFormik);
