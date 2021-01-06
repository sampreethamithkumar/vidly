import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./Component/Movies";
import NavBar from "./Component/common/navbar";
import Customers from "./Component/customers";
import Rentals from "./Component/rentals";
import NotFound from "./Component/notfound";
import LoginForm from "./Component/loginForm";
import RegisterForm from "./Component/registerForm";
import MovieForm from "./Component/movieForm";
import auth from "./services/authService";
// import ProtectedRoute from "./Component/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Logout from "./Component/logout";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/movies/:id"
              render={(props) => {
                if (!user)
                  return (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: props.location },
                      }}
                    />
                  );

                return <MovieForm {...props} />;
              }}
            />
            {/* <ProtectedRoute path="/movies/:id" component={MovieForm} /> */}
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers/:id?" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
