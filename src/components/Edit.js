import React, {useState} from "react";

const Edit = (props) =>{
    let emptyPet = ({ ...props.pet})
    const [pet, setPet] = useState({...props.pet})
    const handleChange = (event) =>{
        setPet({...pet, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleUpdate(pet)
        event.currentTarget.reset()
    }
    return(
        <>
        <details>
            <summary>Edit {props.pet.name}</summary>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange}></input>
                <br  />
                <label>Age</label>
                <input type="number" name="age" onChange={handleChange}></input>
                <br  />
                <label>Breed</label>
                <input type="text" name="breed" onChange={handleChange}></input>
                <br  />
                <label>Image</label>
                <input type="text" name="image" onChange={handleChange}></input>
                <br  />
                <button type="submit">EDIT</button>
            </form>
        </details>
        </>
    )
}

export default  Edit