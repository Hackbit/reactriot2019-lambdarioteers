import React, { useEffect } from 'react'
import { Form, Field ,withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

import { addTask, updateTask, cancel } from '../actions/taskActions'
import { FormContainer, InputError, FormButton } from "./FormStyles";

const TaskForm = ({ status, errors, touched, isSubmitting, addTask, history, updateTask, isUpdating, id }) => {
  useEffect(() => {
    if (status) {
      if (isUpdating) {
        updateTask({
          id,
          ...status
        })
      } else {
        const newTask = {
          id: Date.now(),
          ...status
        }
        addTask(newTask)
      }
      history.push('/task-view')
    }
  }, [status])

  const cancelBtn = () => {
    cancel()
    history.goBack()
  }

  return (
    <FormContainer bgColor="#e9b44c">
      <h1>Create New Task</h1>
      <Form>
        <Field component="input" name="name" type="text" placeholder="Name of task"/>
        <Field component="input" name="locationInput" type="text" placeholder="Location"/>
        <Field component="input" name="pointsToEarn" type="number" placeholder="Points to earn"/>
        <Field component="input" name="time" type="text" placeholder="Time"/>
        <Field component="input" name="img" type="text" placeholder="Image"/>
        <FormButton 
          type="submit" 
          disabled={isSubmitting}
          bgColor="#9b2915"
          hoverColor="#1c110a"
        >{isUpdating ? "Updating" : "Add new task"}</FormButton>
        <FormButton 
          onClick={cancelBtn}
          bgColor="#9b2915"
          hoverColor="#1c110a"
        >Cancel</FormButton>
      </Form>
    </FormContainer>
  )
}

const TaskFormWithFormik = withFormik({
  mapPropsToValues({ name, locationInput, pointsToEarn, img, time }){
    return {
        name: name || "",
        time: time || "",
        locationInput: locationInput || "",
        pointsToEarn: pointsToEarn || "",
        img: img || ""
    }
}, 
  validationSchema: Yup.object().shape({
    name: Yup.string(),
    time: Yup.string(),
    locationInput: Yup.string(),
    pointsToEarn: Yup.number(),
    img: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values)
  }
})(TaskForm)

const mapStateToProps = state => {
  return {
    isUpdating: state.taskReducer.isUpdating,
    id: state.taskReducer.id,
    name: state.taskReducer.name,
    locationInput: state.taskReducer.locationInput,
    time: state.taskReducer.time,
    points: state.taskReducer.pointsToEarn,
    img: state.taskReducer.img
  }
}

export default connect(mapStateToProps, { addTask, updateTask, cancel })(TaskFormWithFormik)
