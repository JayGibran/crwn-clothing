import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSIgnInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./sign-in.style.scss";

const SignIn = ({ emailSignInStart, googleSIgnInStart }) => {
  const [useCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = useCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({
      ...useCredentials,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={useCredentials.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={useCredentials.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSIgnInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSIgnInStart: () => dispatch(googleSIgnInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password))
});

export default connect(null, mapDispatchToProps)(SignIn);
