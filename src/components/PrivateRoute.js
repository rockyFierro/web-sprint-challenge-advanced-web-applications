//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(renderProps) => {
            if(localStorage.getItem('token')){
                return(
                    <Component {...renderProps} />
                )
            } else {
                return(
                    <Redirect to={'/'}/>
                )
            }
        }}/>
    )
};

export default PrivateRoute;