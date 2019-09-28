import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
    return (
        <Form>
            <Field
                name="email"
                type="email"
                placeholder="Email"
            />
            <Field
                name="password"
                type="password"
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </Form>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password }){
       return {
           email: email || "",
           password: password || ""
       }
    }
})(LoginForm);

export default FormikLoginForm;