import React from "react";
import { Link, Redirect, withRouter} from "react-router-dom";
import SearchBarContainer from "../search/search_bar_container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  this.displayCategory=this.displayCategory.bind(this)
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchCategories()
  }

  displayCategory(catergoryId){
    this.props.fetchCategory(catergoryId);
    this.props.history.push("/search")
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
           {/* <span>
              <HiOutlineMenu size={28} />
            </span> */}
          <ul className="category">
            {this.props.categories.map((category)=>{
              return (
                <li onClick={()=>this.displayCategory(category.id)}>
                  {category.category_name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
