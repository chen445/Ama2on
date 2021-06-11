import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductIndexContainer from './home/product_index_container'
import ProductShowContainer from './products/product_show_container'
import ReviewFormContainer from './Review/create_review_container'
import ShoppingCartContainer from './cart_item/shopping_cart_container'
import SearchResultContainer from "./search/search_container";
import {Footer} from './footer/footer'
import { UnderConstruction } from './under_construction';

const App = () => (
  <div>
    <Route
      render={({ location }) =>
        ["/signup", "/login", "/review/create-review:productId"].includes(
          location.pathname
        ) ? null : (
          <NavBarContainer />
        )
      }
    />
    <div>
      <Switch>
        <AuthRoute
          exact
          path="/login"
          component={LogInFormContainer}
        ></AuthRoute>
        <AuthRoute
          exact
          path="/signup"
          component={SignUpFormContainer}
        ></AuthRoute>
        <Route
          exact
          path="/products/:productId"
          component={ProductShowContainer}
        ></Route>
        <Route
          exact
          path="/search"
          component={SearchResultContainer}
        ></Route>
        <ProtectedRoute
          exact
          path="/review/create-review/:productId"
          component={ReviewFormContainer}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/cart"
          component={ShoppingCartContainer}
        ></ProtectedRoute>
        <Route exact path="/" component={ProductIndexContainer}></Route>
        <Route exact path="/page-not-found" component={UnderConstruction}></Route>
      </Switch>
    </div>
    <Footer/>
  </div>
);

export default App;