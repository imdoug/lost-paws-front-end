import React, {useState, useContext} from "react";
import { DogContext } from "../contexts/DogsContext";

const Edit = (props) =>{
    let emptyPet = ({ ...props.pet})
    const [pet, setPet] = useState({...emptyPet})
    const [, , , , handleUpdate] = useContext(DogContext)
    const handleChange = (event) =>{
        setPet({...pet, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        handleUpdate(pet)
        event.currentTarget.reset()
    }
    return(
        <>
        <details>
            <summary>Edit {props.pet.name}</summary>
            <form onSubmit={handleSubmit}>
                <table  className="detail">
                    <tr>
                        <th>Name</th>
                        <th><input type="text" name="name" onChange={handleChange}></input></th>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <th><input type="text" name="location" onChange={handleChange} ></input></th>
                    </tr>
                    <tr>
                        <th>Breed</th>
                        <th><input type="text" name="breed" onChange={handleChange} ></input></th>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <th><input type="url" name="image" onChange={handleChange}></input></th>
                    </tr>
                    <tr>
                        <th>Comments</th>
                        <th><input type="text" name="comments" onChange={handleChange}></input></th>
                    </tr>
                </table>
                <button className ="change-report up top" type="submit">EDIT</button>
            </form>
        </details>
        </>
    )
}

export default  Edit