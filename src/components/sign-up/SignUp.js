import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "./sign-up.scss";
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, displayName, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="displayName"
            type="text"
            value={this.state.displayName}
            required
            label="Full name"
          />

          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email-address"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
          />
          <FormInput
            handleChange={this.handleChange}
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            required
            label="Confirm Password"
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
