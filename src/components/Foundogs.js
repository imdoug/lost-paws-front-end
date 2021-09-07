import React, { useContext,useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"

const  FoundDogs = () =>{
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
            <div className="input-row">
                <div className="filter-options">
                <p>Filter By: </p>
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
                <i class="fa fa-search"></i><input className="search" type="text" placeholder="Search..." onChange={event =>{setSearchTerm(event.target.value)}}/>
            </div>
        <div className="dogs-show">
        {dogs.filter((value)=>{
                if(value.report === 'found'){
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
                    <p>{value.gender} dog</p>
                    <p>{value.location}</p>
                    <p>Report date: {sortData(value.date)}</p>
                    <p>{value.report.toUpperCase()}</p>
                    <button className="info-btn">More information</button>
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

export default FoundDogs