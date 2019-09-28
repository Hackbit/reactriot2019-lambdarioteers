import React from 'react'
import { Form, Field ,withFormik } from 'formik'
import * as Yup from 'yup'

const TaskForm = ({ status, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <Field component="input" name="name" type="text" placeholder="Name of task"/>
      <Field component="input" name="locationInput" type="text" placeholder="Location"/>
      <Field component="input" name="pointsToEarn" type="number" placeholder="Points to earn"/>
      <Field component="input" name="img" type="text" placeholder="Image"/>
      <button disabled={isSubmitting}>Add new task</button>
    </Form>
  )
}

const TaskFormWithFormik = withFormik({
  mapPropsToValues({ name, locationInput, pointsToEarn, img }){
    return {
        name: name || "",
        location: locationInput || "",
        pointsToEarn: pointsToEarn || "",
        img: img || ""
    }
}, 
  validationSchema: Yup.object().shape({
    name: Yup.string(),
    location: Yup.string(),
    pointsToEarn: Yup.number(),
    img: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values)
  }
})(TaskForm)

export default TaskFormWithFormik

