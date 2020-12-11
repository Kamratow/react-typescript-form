import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";

const App = () => {
    return (
        <div className="PageWrapper">
            <img src={logo} className="AppLogo" alt="logo" />
            <Router>
                <Switch>
                    <Route path="/signin">
                        <SignInForm />
                    </Route>
                    <Route path="/signup">
                        <SignUpForm />
                    </Route>
                    <Route path="/">
                        <Redirect to="/signin" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
