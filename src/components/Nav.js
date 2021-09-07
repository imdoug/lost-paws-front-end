import React from "react"
import {Link} from 'react-router-dom'

const Nav = ()=>{
    return(
        <>
        <nav className="nav-one">
            <div>
                <span>If your dog is gone, lost  or stolen, you can post a report easily and free</span><Link to="/contacts"><a className="nav-contact">CONTACT</a></Link><Link to="/help"><a className="nav-help">HELP</a></Link>
            </div>
        </nav>
        <nav className="nav-two">
            <div>
            <img src="https://i.ibb.co/Z1Hk0nb/lostpaws-logo.png"/>
            </div>
            <div className="nav-options">
            <Link to='/'>
                <a className="home" href="">HOME</a>
            </Link>
            {/* <Link to='/all-dogs'>
                <a href="">SEARCH</a>
            </Link> */}
            <Link to='/lost-dogs'>
                <a className="lost">LOST</a>
            </Link>
            <Link to='/found-dogs'>
                <a className="found">FOUND</a>
            </Link>
            <Link to='/breeds'>
                <a className="breeds">BREEDS</a>
            </Link>
            <Link to='/report'>
                <a className="report">POST A REPORT</a>
            </Link>
            </div>
        </nav>
        </>
    )
}

export default Nav