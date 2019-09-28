import React, { useEffect } from 'react'
import { Form, Field ,withFormik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import styled from "styled-components";

import { addTask, updateTask, cancel } from '../actions/taskActions'

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
    <FormContainer>
      <Form>
        <Field component="input" name="name" type="text" placeholder="Name of task"/>
        <Field component="input" name="locationInput" type="text" placeholder="Location"/>
        <Field component="input" name="pointsToEarn" type="number" placeholder="Points to earn"/>
        <Field component="input" name="time" type="text" placeholder="Time"/>
        <Field component="input" name="img" type="text" placeholder="Image"/>
        <FormButton type="submit" disabled={isSubmitting}>{isUpdating ? "Updating" : "Add new task"}</FormButton>
        <FormButton onClick={cancelBtn}>Cancel</FormButton>
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

const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: #50a2a7;

h1 {
    font-size: 2.2rem;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;

    input {
        width: 70%;
        padding: 8px;
        margin: 12px 0;
        border: 2px solid transparent;
        border-radius: 3px;
        font-size: 1rem;
        background: #e4d6a7;
    }   
}
`;

const FormButton = styled.button`
border: none;
border-radius: 3px;
width: 76%;
padding: 14px;
background: pink;
font-size: 1rem;
background: #e9b44c;
transition: all .3s;
margin: 12px 0;

&:hover {
    background: #9b2915;
    color: white;
}
`;
