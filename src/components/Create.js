import React,{useState} from "react";

const Create = (props) =>{
    let emptyPet  = {name: "", age: "", breed: "", image: ""}
    const [pet, setPet] = useState({...emptyPet})
    const handleChange = (event)=>{
        setPet({...pet,[event.target.name]: event.target.value})
    }   
    const handleSubmit = (event)=>{
        event.preventDefault()
        props.handleCreate(pet)
        event.currentTarget.reset()
    }
    return(
        <>
        <details>
            <summary>Submit new Dog</summary>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleChange}></input>
                    <br />
                    <label>Age</label>
                    <input type="number" name="age" onChange={handleChange}></input>
                    <br />
                    <label>Breed</label>
                    <input type="text" name="breed" onChange={handleChange}></input>
                    <br />
                    <label>image</label>
                    <input type="text" name="image" onChange={handleChange}></input>
                    <br />
                    <button type="submit">CREATE</button>
                </form>
        </details>
        </>
    )
}

export default Create