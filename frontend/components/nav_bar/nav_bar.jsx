import React from 'react';
import {Link, Redirect}from 'react-router-dom';
import Search from '../search/search_bar';
import {ImCart }from 'react-icons/im';

const NavBar=(props)=>{
    const display = props.currentUser ? (
         <div className="nav-item nav-right">
            <div className="horizontal">
                <div className="vertical">
                    <p>Hello,{props.currentUser.first_name}</p>
                </div>
                <button className="signout-dropdown" onClick={props.signout}>Log out</button>
            </div>
             <ImCart/>
        </div>
    ) : (
        <div  className="nav-item nav-right">
            <div className="horizontal" >
                Hello,Sign in 
                <div className='login-dropdown'>
                <Link className="link-list" to="/login">
                    Sign in
                </Link > 
            <div>Return & Orders</div>
                <p>Account & Lists</p>
            </div>
            </div>
            <ImCart/>
        </div>
    );

    return (
        <header className='nav-bar'>
            <div className='nav-item nav-left'><h1 className='logo'>logoimg</h1></div>
            <Search className='nav-item nav-center'/>
            {display} 

        </header>
    )
}

export default NavBar;


