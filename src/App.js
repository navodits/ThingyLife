import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import ThingsHappend from "./components/thingsHappend";
import NavBar from "./components/navbar";
import ThingsToDo from "./components/thingsToDo";
import ThingsYoDid from "./components/ThingsYoDid";
import NotFound from "./components/notFound";
import PostsForm from "./components/forms/postsForm";
import LoginForm from "./components/forms/loginForm";
import RegisterForm from "./components/forms/RegisterForm";
import PostForm from "./components/forms/postsForm";
import Logout from "./components/logout";
import WelcomePage from "./components/welcomePage";
import Account from "./components/account";
import { getCurrentUser } from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="app">
          {this.state.user != null && <NavBar user={this.state.user} />}
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <ProtectedRoute path="/logout" component={Logout} />
            <ProtectedRoute path="/new" component={PostForm} />
            <ProtectedRoute path="/account" component={Account} />
            <ProtectedRoute path="/thingsHappend/:id" component={PostsForm} />
            <ProtectedRoute path="/thingsHappend" component={ThingsHappend} />
            <ProtectedRoute path="/thingsToDo" component={ThingsToDo} />
            <ProtectedRoute path="/thingsYoDid" component={ThingsYoDid} />
            <Route exact path="/" component={WelcomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
