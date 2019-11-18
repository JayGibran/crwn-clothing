import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.style.scss";

const SignUp = ({ signUpStart }) => {
  const [useCredentials, setUseCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = useCredentials;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart(email, password, displayName);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUseCredentials({
      ...useCredentials,
      [name]: value
    });
  };

  const { displayName, email, password, confirmPassword } = useCredentials;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButtom type="submit">SIGN UP</CustomButtom>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (user, email, displayName) =>
    dispatch(signUpStart(user, email, displayName))
});

export default connect(null, mapDispatchToProps)(SignUp);
