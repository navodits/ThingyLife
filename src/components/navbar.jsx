import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  state = {
    buttonVisible: true,
  };

  showButton = () => {
    if (Window.length <= 960) {
      this.setState({ buttonVisible: false });
    } else {
      this.setState({ buttonVisible: true });
    }
  };
  render() {
    window.addEventListener("resize", this.showButton);
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/thingsHappend">
          ThingyLife
          <i className="fa fa-cubes" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/thingsHappend">
                Things Happend
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thingsToDo">
                Things To Do
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thingsYoDid">
                Things Yo Did
              </Link>
            </li>
            {user && (
              <React.Fragment>
                <li className="nav-item account">
                  <Link className="nav-link" to="/account">
                    {user.first_name}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
