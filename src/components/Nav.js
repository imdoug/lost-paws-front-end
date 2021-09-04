import React, {useContext} from "react"
import { DogContext } from '../contexts/DogsContext'

const Nav = ()=>{
    const [dogs, setDogs, handleCreate, handleDelete, handleUpdate,formModal] = useContext(DogContext)
    return(
        <>
        <nav>
            <a>HOME</a>
            <a>SEARCH</a>
            <a>LOST</a>
            <a>FOUND</a>
            <a type="button" onClick={formModal}>POST A REPORT</a>
            <a>ALERTS</a>
            <a>ADVICES</a>
        </nav>
        </>
    )
}

export default Nav