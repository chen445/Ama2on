import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import NavBarContainer from './nav_bar/nav_bar_container'
const App = () => (
    <div>
        <NavBarContainer/>
        <div>
           <Switch>
               <AuthRoute exact path="/login" component={LogInFormContainer}></AuthRoute>
               <AuthRoute exact path="/signup" component={SignUpFormContainer}></AuthRoute>
           </Switch>
            {/* <Route exact path='/' component={Home}></Route> */}

        </div>
    </div>
);

export default App;