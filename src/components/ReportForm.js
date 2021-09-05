import React,{useContext, useState} from "react";
import { DogContext } from '../contexts/DogsContext'

const ReportForm = (props) =>{
    let emptyPet  = {name: "", age: "", breed: "", image: "",fur: "", ears: "", size: "", color: "", neutured: "", gender: "", location: "", date: "", report: ""}
    const [pet, setPet] = useState({...emptyPet})
    const [, , handleCreate] = useContext(DogContext)
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
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label className="form-header">Lost or Found?</label>
                <br/>
                <input type="radio" id="lost" name="report" value="lost"onChange={handleChange}/>
                <label for="lost">Lost</label>
                <input type="radio" name="report" value="found" onChange={handleChange}/>
                <label for="found">Found</label><br></br>
                <br/>
                <label>Name</label>
                <br/>
                <input type="text" name="name" onChange={handleChange}></input>
                <br />
               <label>Age</label>
               <br/>
                <input type="number" name="age" onChange={handleChange}></input>
                <br />
                <label>Breed</label>
                <br/>
                <input type="text" name="breed" onChange={handleChange}></input>
                <br />
                <label>image</label>
                <br/>
                <input type="text" name="image" onChange={handleChange}></input>
                <br />
                <label>Fur</label>
                <br/>
                <input type="text" name="fur" onChange={handleChange}></input>
                <br />
                <label>Ears</label>
                <br/>
                <input type="text" name="ears" onChange={handleChange}></input>
                <br />
                <label>Size</label>
                <br/>
                <select className="input-option" name="size" onChange={handleChange}>
                    <option className="empty-option" value="">select a size</option>
                    <option className="empty-option" value="very small">very small</option>
                    <option className="empty-option" value="small">small</option>
                    <option className="empty-option" value="medium">medium</option>
                    <option className="empty-option" value="large">large</option>
                    <option className="empty-option" value="extra large">extra large</option>
                </select>
                <br />
                <label>Color</label>
                <br/>
                <input type="text" name="color" onChange={handleChange}></input>
                <br />
                <label>Spayed/Neutured</label>
                <br/>
                <input type="text" name="neutured" onChange={handleChange}></input>
                <br />
                <label>Gender</label>
                <br/>
                <select className="input-option" name="gender" onChange={handleChange}>
                    <option className="empty-option" value="">select a gender</option>
                    <option className="empty-option" value="female">female</option>
                    <option className="empty-option" value="male">male</option>
                    <option className="empty-option" value="i do not know">i don't know</option>
                </select>
                <br />
                <label>Location</label>
                <br/>
                <input type="text" name="location" onChange={handleChange}></input>
                <br />
                <label>date</label>
                <br/>
                <input type="date" name="date" onChange={handleChange}></input>
                <br />
                <button className="create-btn" type="submit">POST</button>
            </form>
        </div>
        </>
    )
}

export default ReportForm