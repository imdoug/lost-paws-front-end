import React, { useContext, useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import { Link } from "react-router-dom"
import Edit from "./Edit"

const  LostDogs = () =>{
    const [dogs,,,handleDelete, handleUpdate,lost,found,reunited,sortData] = useContext(DogContext)
    const [searchTerm, setSearchTerm] = useState("")
    const [onfilter, setFilter] = useState("name")
    const handleChange = (value) =>{
        setFilter(value)
        console.log(onfilter)
    }
    return (
        <>
        <div className="dog-container">
        <div className="search-box">
            <div className="filter-options">
                <input type="radio" id="lost" name="filter" value="breed"onChange={event =>{handleChange(event.target.value)}}/>
                <label for="lost">Breed</label>
                <input type="radio" name="filter" value="name" onChange={event =>{handleChange(event.target.value)}}/>
                <label for="name">Name</label><br/>
                <input type="radio" id="lost" name="filter" value="gender"onChange={event =>{handleChange(event.target.value)}}/>
                <label for="lost">Gender</label>
                <input type="radio" id="lost" name="filter" value="date"onChange={event =>{handleChange(event.target.value)}}/>
                <label for="lost">Date</label>
                <input type="radio" id="lost" name="filter" value="color"onChange={event =>{handleChange(event.target.value)}}/>
                <label for="lost">Color</label>
                <input type="radio" id="lost" name="filter" value="size"onChange={event =>{handleChange(event.target.value)}}/>
                <label for="lost">Size</label>
            </div>
            <div className="input-row">
                <i class="fa fa-search"></i><input type="text" className="search" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}}/>
            </div>
        </div>
        <div className="dogs-show">
        {dogs.filter((value)=>{
                if(value.report === "lost"){
                    if(value[onfilter].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return value
                    }
                }
            }).map((value, id) =>{
                return(
                    <div className="dog-card">
                    <div>
                    <img src={value.image}/>
                    </div>
                    {value.report === 'lost' && <h3 style={lost[1]}>{value.name}</h3>}
                    {value.report === 'found' && <h3 style={found[1]}>{value.name}</h3>}
                    {value.report === 'reunited' && <h3 style={reunited[1]}>{value.name}</h3>}
                    <p className="up">{value.gender.toUpperCase()} DOG</p>
                    <p className="card-location"><b>{value.location}</b></p>
                    { value.report === 'lost' &&<p className="up">Lost since: {sortData(value.date)}</p>}
                    { value.report === 'found' && <p className="up">Found since: {sortData(value.date)}</p>}
                    { value.report === 'reunited' && <p className="up">Posted since: {sortData(value.date)}</p>}
                    {value.report === 'lost' && <p className="title up" style={lost[1]}>{value.report.toUpperCase()}</p>}
                    {value.report === 'found' && <p className="title up" style={found[1]}>{value.report.toUpperCase()}</p>}
                    {value.report === 'reunited' && <p className="title up" style={reunited[1]}>{value.report.toUpperCase()}</p>}
                    <Link to={`dogs/${value.id}`}><button className="info-btn">More information</button></Link>
                    {value.report === 'lost' && <div className="shadow" style={lost[0]}></div>}
                    {value.report === 'found' && <div className="shadow" style={found[0]}></div>}
                    {value.report === 'reunited' && <div className="shadow" style={reunited[0]}></div>}
                    {/* <button onClick={(event) => handleDelete(value.id)}>DELETE</button>
                    <Edit pet={value}/> */}
                </div>
                )
            })}   
        </div>
        </div>
        </>
    )
}

export default LostDogs