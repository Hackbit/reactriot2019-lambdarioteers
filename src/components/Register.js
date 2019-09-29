import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { addUser } from '../actions';
import { FormContainer, InputError, FormButton } from './FormStyles';

const Register = ({ errors, touched, isSubmitting }) => {
  return (
    <FormContainer bgColor="#50a2a7">
      <h1>Register</h1>
      <Form>
        <Field name="organization" type="text" placeholder="Organization" />
        {errors.organization && <InputError>{errors.organization}</InputError>}
        <Field name="name" type="text" placeholder="Contact Name" />
        {errors.name && <InputError>{errors.name}</InputError>}
        <Field name="phone" type="phone" placeholder="Phone" />
        {errors.phone && <InputError>{errors.phone}</InputError>}
        {touched.phone && <InputError>{touched.phone}</InputError>}
        <Field name="email" type="email" placeholder="E-mail" />
        {errors.email && <InputError>{errors.email}</InputError>}
        <Field name="address" type="address" placeholder="Address" />
        {errors.address && <InputError>{errors.address}</InputError>}
        <Field name="password" type="password" placeholder="Password" />
        {errors.password && <InputError>{errors.password}</InputError>}
        <Field component="select" name="user_type">
          <option value="" selected disabled hidden>
            Select account type
          </option>
          <option selected="selected" value="Volunteer">
            Volunteer
          </option>
          <option value="Charity">Charity</option>
        </Field>
        {errors.user_type && <InputError>{errors.user_type}</InputError>}
        <FormButton
          disabled={isSubmitting}
          type="submit"
          bgColor="#e9b44c"
          hoverColor="#9b2915"
        >
          Register
        </FormButton>
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
    password,
    user_type
  }) {
    return {
      organization: organization || '',
      name: name || '',
      phone: phone || '',
      email: email || '',
      address: address || '',
      password: password || '',
      user_type: user_type || ''
    };
  },

  validationSchema: Yup.object().shape({
    organization: Yup.string().required('Please enter an organization.'),
    name: Yup.string().required('Please enter a contact name.'),
    phone: Yup.number()
      .typeError('Please enter a valid phone number.')
      .required('Please enter a phone number.'),
    email: Yup.string().required('Please enter an e-mail.'),
    address: Yup.string().required('Please enter an address.'),
    password: Yup.string()
      .min(6, 'Your password must be a minimum of 6 characters.')
      .required('Please enter a password.'),
    user_type: Yup.string()
      .oneOf(['Volunteer', 'Charity'])
      .required('Please select your account type.')
  }),

  handleSubmit(values, { props }) {
    console.log(values);
    const id = Date.now();
    props.addUser({
      ...values,
      id: id,
      tasks: [],
      authorized: true
    });
    localStorage.setItem('id', id);
    props.history.push('/dashboard');
  }
})(Register);

const mapStateToProps = state => {
  console.log(state);

  return state;
};

export default connect(
  mapStateToProps,
  { addUser }
)(FormikRegisterForm);
