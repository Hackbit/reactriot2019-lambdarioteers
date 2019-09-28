import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        height: 400px;

        input {
            width: 70%;
            padding: 8px;
            border: 2px solid lightgrey;
            border-radius: 3px;
        }

        button {
            border: none;
            border-radius: 3px;
            width: 74%;
            padding: 10px;
            background: pink;
        }
    }

`;

const Register = () => {
    return (
        <FormContainer>
            <h1>Register</h1>
            <Form>
                <Field 
                    name="organization" 
                    type="text" 
                    placeholder="Organization"
                />
                <Field 
                    name="name" 
                    type="text" 
                    placeholder="Contact Name"
                />
                <Field 
                    name="phone" 
                    type="phone" 
                    placeholder="Phone"
                />
                <Field 
                    name="email" 
                    type="email" 
                    placeholder="E-mail"
                />
                <Field 
                    name="address" 
                    type="address" 
                    placeholder="Address"
                />
                <button>Submit</button>
            </Form>
        </FormContainer>
    );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({ organization }){
        return {
            organization: organization || ""
        }
    }
})(Register);

export default FormikRegisterForm;