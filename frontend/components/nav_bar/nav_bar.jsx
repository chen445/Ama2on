import React from "react";
import { Link, Redirect } from "react-router-dom";
import SearchBarContainer from "../search/search_bar_container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    const display = this.props.currentUser ? (
      <div className="nav-item nav-right">
        <div className="horizontal">
          <p>
            Hello,{this.props.currentUser.first_name}
            <br></br>
            Account & Lists
          </p>
          <div className="dropdown">
            <button className="signout-dropdown" onClick={this.props.signout}>
              Log out
            </button>
          </div>
        </div>

        <p>
          <Link style={{ color: "whitesmoke" }} to="/page-not-found">
            Return &
            <br />
            Orders
          </Link>
        </p>
        <div className="number">
          {this.props.numberOfCartItems ? this.props.numberOfCartItems : null}
        </div>
        <div>
          <Link to="/cart">
            <AiOutlineShoppingCart size={50} className="shopping-cart" />
          </Link>
        </div>
      </div>
    ) : (
      <div className="nav-item nav-right">
        <div className="horizontal">
          <p>
            Hello,Sign in
            <br></br>
            Account & Lists
          </p>
          <div className="dropdown">
            <Link className="link-list" to="/login">
              <button className="signout-dropdown">Sign in</button>
            </Link>
            <br />
            New customer? <Link to="/signup">Star Here</Link>
          </div>
        </div>
        <p>
          <Link style={{ color: "whitesmoke" }} to="/page-not-found">
            Return &
            <br />
            Orders
          </Link>
        </p>
        <Link to="/login">
          <AiOutlineShoppingCart size={50} className="shopping-cart" />
        </Link>
      </div>
    );

    return (
      <div>
        <header className="nav-bar">
          <div className="nav-item nav-left logo">
            <Link to="/">
              <img src={window.logoURL2} />
            </Link>
          </div>
          <SearchBarContainer className="nav-item nav-center" />
          {display}
        </header>
        <div className="sub-nav-bar">
           <span>
          <Link to="/page-not-found">
              <HiOutlineMenu size={28} />
          </Link>
            </span>
          <ul className="category">
            <Link to="/page-not-found">
              <li>Best Sellers</li>
            </Link>
            <Link to="/page-not-found">
              <li>Books</li>
            </Link>
            <Link to="/page-not-found">
              <li>Health & Beauty</li>
            </Link>
            <Link to="/page-not-found">
              <li>Fashion</li>
            </Link>
            <Link to="/page-not-found">
              <li>Electronics</li>
            </Link>
            <Link to="/page-not-found">
              <li>Food & Gifts</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
