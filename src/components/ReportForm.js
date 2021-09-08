import React,{useContext, useState} from "react";
import { DogContext } from '../contexts/DogsContext'
import { Link } from "react-router-dom";

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
                    <p className="form-header centered">REPORT FORM</p>
                        <input className="centered" type="radio" id="lost" name="report" required value="lost"onChange={handleChange}/>
                        <label className="centered aside" for="lost">Lost</label>
                        <input  className="centered" type="radio" name="report" value="found" required onChange={handleChange}/>
                        <label  className="centered" for="found">Found</label><br></br>
                <table>
                <tr className="top">
                    <th><label>Name</label></th>
                    <th><input className="text-field" type="text" name="name" onChange={handleChange} required></input></th>
                </tr>
                <tr>
                    <th><label>Age</label></th>
                    <th><input className="text-field" type="number" name="age" onChange={handleChange}></input></th>
                </tr>
                <tr>
                    <th><label>Breed</label></th>
                    <th><input className="text-field" type="text" name="breed" onChange={handleChange}></input></th>
                </tr>
                <tr>
                    <th><label>Image URL</label></th>
                    <th><input className="text-field" type="text" name="image" onChange={handleChange} required></input></th>
                </tr>
                <tr>
                    <th><label>Fur</label></th>
                    <th><input className="text-field" type="text" name="fur" onChange={handleChange}></input></th>
                </tr>
                <tr>
                    <th><label>Ears</label></th>
                    <th><input className="text-field" type="text" name="ears" onChange={handleChange}></input></th>
                </tr>
                <tr>
                    <th><label>Size</label></th>
                    <th>
                    <select className="input-option" name="size" onChange={handleChange} required>
                        <option className="empty-option" value="">select a size</option>
                        <option className="empty-option" value="very small">very small</option>
                        <option className="empty-option" value="small">small</option>
                        <option className="empty-option" value="medium">medium</option>
                        <option className="empty-option" value="large">large</option>
                        <option className="empty-option" value="extra large">extra large</option>
                </select>
                    </th>
                </tr>
                <tr>
                    <th><label>Color</label></th>
                    <th><input className="text-field" type="text" name="color" onChange={handleChange} required></input></th>
                </tr>
                <tr>
                    <th><label>Spayed/Neutured</label></th>
                    <th><input className="text-field" type="text" name="neutured" onChange={handleChange}></input></th>
                </tr>
                <tr>
                    <th>
                        <label>Gender</label>
                    </th>
                    <th>
                    <select  className="input-option" name="gender" onChange={handleChange} required>
                    <option className="empty-option" value="">select a gender</option>
                    <option className="empty-option" value="female">female</option>
                    <option className="empty-option" value="male">male</option>
                    <option className="empty-option" value="i do not know">i don't know</option>
                </select>
                    </th>
                </tr>
                <tr>
                    <th><label>Location</label></th>
                    <th><input className="text-field" type="text" name="location" onChange={handleChange} required></input></th>
                </tr>
                <tr>
                    <th><label>date</label></th>
                    <th><input className="text-field" type="date" name="date" onChange={handleChange} required></input></th>
                </tr>
                <tr>
                    <th><label>coments</label></th>
                    <th><input className="text-field" type="text" name="coments" onChange={handleChange}></input></th>
                </tr>
                </table>
                <button className="create-btn" type="submit">post</button>
            </form>
        </div>
        </>
    )
}

export default ReportForm