import React from 'react';
import {Link, Redirect}from 'react-router-dom';
import SearchBarContainer from "../search/search_bar_container";
import { AiOutlineShoppingCart } from "react-icons/ai";
import{HiOutlineMenu} from 'react-icons/hi'

const NavBar=(props)=>{
    const display = props.currentUser ? (
      <div className="nav-item nav-right">
        <div className="horizontal">
          <p>
            Hello,{props.currentUser.first_name}
            <br></br>
            Account & Lists
          </p>
          <div className="dropdown">
            <button className="signout-dropdown" onClick={props.signout}>
              Log out
            </button>
          </div>
        </div>
        <p>
          Return &
          <br />
          Orders
        </p>
        <div className="number">{props.numberOfCartItems ? props.numberOfCartItems : null}</div>
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
          Return &
          <br />
          Orders
        </p>
        <AiOutlineShoppingCart className="shopping-cart" />
      </div>
    );

    return (
        <div>
             <header className='nav-bar'>
                 <div className='nav-item nav-left logo'>
                    <Link to="/">
                    <img src={window.logoURL2}/>
                    </Link>
                 </div>
              <SearchBarContainer className='nav-item nav-center' />
             {display} 
            </header>
            <div className="sub-nav-bar">
                 <span><HiOutlineMenu size={28}/></span>
                <ul className='category'>
                    <li>Best Sellers</li>
                    <li>Books</li>
                    <li>Health & Beauty</li>
                    <li>Fashion</li>
                    <li>Electronics</li>
                    <li>Food & Gifts</li>
                </ul>

            </div>
        </div>
    )

}

export default NavBar;


