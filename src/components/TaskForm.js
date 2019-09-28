import React from 'react'
import { Form, Field ,withFormik } from 'formik'
import * as Yup from 'yup'

const TaskForm = () => {
  return (
    <Form>
      <Field component="input" name="name" type="text" placeholder="Insert Name here"/>
    </Form>
  )
}

const TaskFormWithFormik = withFormik()(TaskForm)

export default TaskFormWithFormik
