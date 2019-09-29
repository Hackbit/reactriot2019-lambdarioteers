import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => (
    <Route render={(props) => (
        localStorage.getItem('id')
        ? <Component {...props} />
        : <Redirect to="/" />
    )} />
);

export default PrivateRoute;