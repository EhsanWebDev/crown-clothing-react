import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/CustomButton";
import { singInWithGoogle } from "../../firebase/firebase.util";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={singInWithGoogle} isGoogle>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
