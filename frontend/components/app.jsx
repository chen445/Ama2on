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
import ProductIndexContainer from './home/product_index_container'
import ProductShowContainer from './products/product_show_container'

const App = () => (
    <div>
        <Route 
            render={({ location }) => ['/signup', '/login'].includes(location.pathname)
                ? null
                : <NavBarContainer/>
            }
        />
        <div>
           <Switch>
               <AuthRoute exact path="/login" component={LogInFormContainer}></AuthRoute>
               <AuthRoute exact path="/signup" component={SignUpFormContainer}></AuthRoute>
               <Route exact path="/products/:productId" component={ProductShowContainer}></Route>
               <Route exact path='/' component={ProductIndexContainer}></Route>
           </Switch>

        </div>
    </div>
);

export default App;