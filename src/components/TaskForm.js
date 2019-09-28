import React from 'react'
import { Form, Field ,withFormik } from 'formik'
import * as Yup from 'yup'

const TaskForm = () => {
  return (
    <Form>
      <Field component="input" name="name" type="text" placeholder="Name of task"/>
      <Field component="input" name="location" type="text" placeholder="Location"/>
      <Field component="input" name="pointsToEarn" type="number" placeholder="Points to earn"/>
      <Field component="input" name="img" type="text" placeholder="Image"/>
    </Form>
  )
}

const TaskFormWithFormik = withFormik({
  mapPropsToValues({ name, location, pointsToEarn, img }){
    return {
        name: name || "",
        location: location || "",
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

