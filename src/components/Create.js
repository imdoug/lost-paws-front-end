import React,{useContext, useState} from "react";
import { DogContext } from '../contexts/DogsContext'

const Create = (props) =>{
    let emptyPet  = {name: "", age: "", breed: "", image: "",fur: "", ears: "", size: "", color: "", neutured: "", gender: "", location: "", date: "", report_type: ""}
    const [pet, setPet] = useState({...emptyPet})
    const [dogs, setDogs, handleCreate, handleDelete, handleUpdate,formModal] = useContext(DogContext)
    const handleChange = (event)=>{
        setPet({...pet,[event.target.name]: event.target.value})
    }   
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(pet.date)
        handleCreate(pet)
        event.currentTarget.reset()
    }
    return(
        <>
        <div className="form-box hidden">
            <button onClick={formModal}>x</button>
            <form onSubmit={handleSubmit}>
                <label className="form-header">Lost or Found?</label>
                <br/>
                <input type="radio" id="lost" name="report_type" value="lost"/>
                <label for="lost">Lost</label>
                <input type="radio" name="report_type" value="found"/>
                <label for="found">Found</label><br></br>
                <br/>
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
                <label>Fur</label>
                <input type="text" name="fur" onChange={handleChange}></input>
                <br />
                <label>Ears</label>
                <input type="text" name="ears" onChange={handleChange}></input>
                <br />
                <label>Size</label>
                <select name="size" onChange={handleChange}>
                    <option value=" "> </option>
                    <option value="very small">very small</option>
                    <option value="small">small</option>
                    <option  value="medium">medium</option>
                    <option value="large">large</option>
                    <option  value="extra large">extra large</option>
                </select>
                <br />
                <label>Color</label>
                <input type="text" name="color" onChange={handleChange}></input>
                <br />
                <label>Neutured</label>
                <input type="text" name="neutured" onChange={handleChange}></input>
                <br />
                <label>Gender</label>
                <select name="gender" onChange={handleChange}>
                    <option value=" "> </option>
                    <option value="female">female</option>
                    <option value="Mmale">male</option>
                </select>
                <br />
                <label>Location</label>
                <input type="text" name="location" onChange={handleChange}></input>
                <br />
                <label>date</label>
                <input type="date" name="date" onChange={handleChange}></input>
                <br />
                <button type="submit">POST</button>
            </form>
        </div>
        </>
    )
}

export default Create