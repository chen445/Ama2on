import React from 'react';
import {Link, Redirect}from 'react-router-dom';
import Search from '../search/search_bar';
import {ImCart }from 'react-icons/im';

const NavBar=(props)=>{
    const display = props.currentUser ? (
         <div className="nav-item nav-right">
            <div className="horizontal">
                <p>Hello, {props.currentUser.first_name}</p>
                <button className="signout" onClick={props.signout}>Log out</button>
            </div>
             <ImCart/>
        </div>
    ) : (
        <div  className="nav-item nav-right">
            <div className="horizontal" >
                <p>Hello, </p>
                <Link to="/login">
                    <p>Sign in</p>
                </Link>  
            </div>
            <ImCart/>
        </div>
    );

    return (
        <header className='nav-bar'>
            <div className='nav-item' ><h1 className='logo'>logoimg</h1></div>
            <Search className='nav-item nav-center'/>
            {display} 

        </header>
    )
}

export default NavBar;


