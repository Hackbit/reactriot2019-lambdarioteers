import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { connect } from "react-redux"

const LoginForm = ({ setLoggingIn, errors }) => {
  return (
    <LandingWrapper>
      <Header>Log In</Header>
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        {errors.email && <InputError>{errors.email}</InputError>}
        <Field name="password" type="password" placeholder="Password" />
        {errors.password && <InputError>{errors.password}</InputError>}
        <Bottom>
          <Button type="submit">Log In</Button>
        </Bottom>
      </Form>
    </LandingWrapper>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('Please enter your Email.'),
    password: Yup.string().required('Please enter your password.')
  }),

  handleSubmit(values, { props, resetForm }) {
    let user = props.users.filter(user => 
      (user.email === values.email) && (user.password === values.password)
      )[0];

      if (user){
      localStorage.setItem('id', user.id);
      props.history.push("/dashboard");
    } else {
      resetForm();
    }
  }
})(LoginForm);

const mapStateToProps = state => {
  return { users: state.userReducer.users } 
};

export default connect(
  mapStateToProps,
  null
)(FormikLoginForm);

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url('https://react-riot.s3.us-east-2.amazonaws.com/lady_medium.jpg');
  background-size: cover;
  @media (min-width: 500px) {
    background-image: url('https://react-riot.s3.us-east-2.amazonaws.com/14962.jpg');
  }
  overflow: hidden;

  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    select {
      width: 100%;
      padding: 0;
      margin: 10px auto;
      height: 30px;
      background-color: #e4d6a7;
      border: 1px solid black;
    }
    input {
      width: 90%;
      padding: 8px;
      margin: 12px 0;
      border: 2px solid transparent;
      border-radius: 3px;
      font-size: 1rem;
      background: #e4d6a7;
    }
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  margin-bottom: 35px;
  padding: 15px 0;
  max-width: 300px;
  color: #e4d6a7;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 2px 2px 2px #1c110a;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 150px auto;
  width: 100%;
`;

const Header = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');
  margin-top: 50px;
  font-size: 3rem;
  color: #1c110a;
  font-weight: bold;
  text-shadow: 2px 2px 5px #e4d6a7;
  font-family: 'Fredoka One', cursive;
`;

const InputError = styled.p`
  font-size: 0.8rem;
  background: #9b2915;
  color: white;
  width: 73%;
  border-radius: 3px;
  padding: 3px 0 3px 8px;
  margin-top: -3px;
`;
