import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { login } from "../../services/authService";
import "./form.css";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      console.log(this.state.data);
      const { data } = this.state;
      await login(data.username, data.password);

      window.location = "/thingsHappend";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        errors.username = "Invalid Credentials";
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="page-container">
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Email")}
            {this.renderInput("password", "Password", "password")}

            {this.rendreButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
