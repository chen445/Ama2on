import React from 'react';
import {Link, Redirect}from 'react-router-dom';
import Search from '../search/search_bar';
import {ImCart }from 'react-icons/im';

const NavBar=(props)=>{
    const display = props.currentUser ? (
         <div className="nav-item nav-right">
            <div className="horizontal">
                Hello,{props.currentUser.first_name}
                 <br></br>
                Account & Lists
                <div className='dropdown'>
                <button className="signout-dropdown" onClick={props.signout}>Log out</button>
                </div>
            </div>
             <p >Return & 
                <br/>
                Orders</p>
             <ImCart/>
        </div>
    ) : (
        <div  className="nav-item nav-right">
            <div className="horizontal" >
                Hello,Sign in 
                <br></br>
                Account & Lists
                <div className='dropdown'>
                <Link className="link-list" to="/login">
                    <button className='signout-dropdown'>Sign in</button>
                </Link > 
                <br/>
                New customer? <Link to="/signup">Star Here</Link>
                </div>
            </div>
             <p >Return & 
                <br/>
                Orders</p>
            <ImCart/>
        </div>
    );

    return (
        <header className='nav-bar'>
            <div className='nav-item nav-left logo'>
                <Link to="/">
                <img src={window.logoURL2}/>
                </Link>
            </div>
            <Search className='nav-item nav-center'/>
            {display} 
        </header>
    )
}

export default NavBar;


