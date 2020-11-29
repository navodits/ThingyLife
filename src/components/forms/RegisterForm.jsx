import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import * as userService from "../../services/userService";
import "./form.css";
import { loginWithJwt } from "../../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).required().label("Password"),
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register({
        ...this.state.data,
        email: this.state.data.username,
      });
      loginWithJwt(response.data["token"]);
      window.location = "/thingsHappend";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        console.log(ex.response.data);
        errors.username = "User is already registered with this credential";
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div className="page-container">
        <div className="form-container">
          <h1 className="header">Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("firstName", "First Name")}
            {this.renderInput("lastName", "Last Name")}
            {this.rendreButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
