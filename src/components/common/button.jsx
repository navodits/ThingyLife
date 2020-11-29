import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./button.css";

const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn-medium", "btn-large"];
class Button extends Component {
  state = {};

  render() {
    const {
      children,
      type,
      onClick,
      buttonStyle,
      buttonSize,
      path = "not-found",
    } = this.props;
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
      <Link to={path} className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }
}

export default Button;
