import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from 'react-redux';

import { addUser } from "../actions";

const Register = ({ errors, touched, isSubmitting }) => {
    return (
        <FormContainer>
            <h1>Register</h1>
            <Form>
                <Field 
                    name="organization" 
                    type="text" 
                    placeholder="Organization"
                />
                {errors.organization && <InputError>{errors.organization}</InputError>}
                <Field 
                    name="name" 
                    type="text" 
                    placeholder="Contact Name"
                />
                {errors.name && <InputError>{errors.name}</InputError>}
                <Field 
                    name="phone" 
                    type="phone" 
                    placeholder="Phone"
                />
                {errors.phone && <InputError>{errors.phone}</InputError>}
                {touched.phone && <InputError>{touched.phone}</InputError>}
                <Field 
                    name="email" 
                    type="email" 
                    placeholder="E-mail"
                />
                {errors.email && <InputError>{errors.email}</InputError>}
                <Field 
                    name="address" 
                    type="address" 
                    placeholder="Address"
                />
                {errors.address && <InputError>{errors.address}</InputError>}
                <Field 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                />
                {errors.password && <InputError>{errors.password}</InputError>}
                <SubmitButton disabled={isSubmitting} type="submit">Register</SubmitButton>
            </Form>
        </FormContainer>
    );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({ 
        organization, 
        name, 
        phone, 
        email, 
        address, 
        password 
    }){
        return {
            organization: organization || "",
            name: name || "",
            phone: phone || "",
            email: email || "",
            address: address || "",
            password: password || ""
        }
    }, 

    validationSchema: Yup.object().shape({
        organization: Yup.string()
            .required("Please enter an organization."),
        name: Yup.string()
            .required("Please enter a contact name."),
        phone: Yup.number()
            .typeError("Please enter a valid phone number.")
            .required("Please enter a phone number."),
        email: Yup.string()
            .required("Please enter an e-mail."),
        address: Yup.string()
            .required("Please enter an address."),
        password: Yup.string()
            .min(6, "Your password must be a minimum of 6 characters.")
            .required("Please enter a password.")
    }),

    handleSubmit(values, { props, resetForm }){
        console.log(values)
        values.name = "";
        values.phone = "";
        props.addUser(values);
        resetForm();
    }
})(Register);

export const FormContainer = styled.div`
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

export const SubmitButton = styled.button`
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

export const InputError = styled.p`
font-size: .8rem;
background: #9b2915;
color: white;
width: 73%;
border-radius: 3px;
padding: 3px 0 3px 8px;
margin-top: -3px;
`;

const mapStateToProps = state => {
	console.log(state);

	return state;
}

export default connect(mapStateToProps, { addUser })(FormikRegisterForm);
