// import React from 'react';
// import {connect} from 'react-redux';
// import {Redirect, Route, withRouter} from 'react-router-dom';

// const mapStateToProps = state => (
//   {loggedIn: Boolean(state.session.id)}
// );

// const Auth = ({ component: Component, loggedIn, path, exact})=>{
//   debugger
//    return  <Route
//     path = {path}
//     exact = {exact}
//     render={(props)=> {
//         debugger
//         const c = (<Component {...props}/>);
//         return loggedIn ? <Redirect to="/" /> : c;
//       }}> 
//     </Route>
// };

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);


const Protected =({loggedIn,path,component: Component,exact}) =>(
    <Route
        path={path}
        exact ={exact}
        render={(props) =>(
            loggedIn? (<Component {...props} />) : (<Redirect to="/login" />)
        )}
    /> 
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));