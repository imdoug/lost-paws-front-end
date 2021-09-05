import React from "react"
import { Link } from "react-router-dom"

const Footer = ()=>{
    return(
        <>
        <footer>
            <p>2021 Doug Moreira, all rights reserved</p>
            <Link to="/breeds">
                <p>DOG BREEDS</p>
            </Link>
            <Link to="/contacts">
            <p>CONTACT</p>
            </Link>
            <Link to="/help">
            <p>HELP</p>
            </Link>
        </footer>
        </>
    )
}
export default Footer