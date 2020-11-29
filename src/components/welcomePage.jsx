import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Button from "./common/button";
import "./welcomePage.css";

class WelcomePage extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <h1> Welcome to your ThingyLife</h1>
        <div className="home-btns">
          <Button path="login" buttonStyle="btn-outline" buttonSize="btn-large">
            Login
          </Button>
          <Button
            path="register"
            buttonStyle="btn-outline"
            buttonSize="btn-large"
          >
            Register
          </Button>
        </div>
        <h3>
          Lets start journaling your life <br /> full of expected/unexpected
          things.
        </h3>
      </div>
    );
  }
}

export default WelcomePage;
