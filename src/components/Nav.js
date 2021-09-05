import React, {useContext} from "react"
import { DogContext } from '../contexts/DogsContext'
import {Link} from 'react-router-dom'

const Nav = ()=>{
    const [dogs, setDogs, handleCreate, handleDelete, handleUpdate,formModal] = useContext(DogContext)
    return(
        <>
        <nav>
            <Link to='/'>
                <a>HOME</a>
            </Link>
            <Link to='/all-dogs'>
                <a>SEARCH</a>
            </Link>
            <Link to='/lost-dogs'>
                <a>LOST</a>
            </Link>
            <Link to='/found-dogs'>
                <a>FOUND</a>
            </Link>
            <Link to='/report'>
                <a>POST A REPORT</a>
            </Link>
            <a>ALERTS</a>
            <a>ADVICES</a>
        </nav>
        </>
    )
}

export default Nav