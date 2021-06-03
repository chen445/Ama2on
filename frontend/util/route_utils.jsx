import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Reidrect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

const Auth = ({loggedIn, path, component: Component, exact})=>(
    <Route
    path = {path}
    exact = {exact}
    render={(props)=> (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />)}> </Route>
);

// const Protected =({loggedIn,path,component: Component,exact}) =>(
//     <Route
//         path={path}
//         exact ={exact}
//         render={(props) =>(
//             loggedIn? (<Component {...props} />) : (<Redirect to="/login" />)
//         )}
//     /> 
// );


export const AutRoute =withRouter(connect(mapStateToProps)(Auth))

// export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));