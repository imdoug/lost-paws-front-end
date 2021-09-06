import React from "react"
import {Link} from 'react-router-dom'

const Nav = ()=>{
    return(
        <>
        <nav>
            <Link to='/'>
                <a href="">HOME</a>
            </Link>
            <Link to='/all-dogs'>
                <a href="">SEARCH</a>
            </Link>
            <Link to='/lost-dogs'>
                <a>LOST</a>
            </Link>
            <Link to='/found-dogs'>
                <a href="">FOUND</a>
            </Link>
            <Link to='/report'>
                <a href="">POST A REPORT</a>
            </Link>
            <Link to='/alerts'>
                <a href="">ALERTS</a>
            </Link>
        </nav>
        </>
    )
}

export default Nav