import React, { useContext,useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"

const  FoundDogs = () =>{
    const [dogs,,,handleDelete, handleUpdate] = useContext(DogContext)
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
        <div>
        <input type="text" placeholder="Search by breed..."nChange={event => setSearchTerm(event.target.value)}/>
        {dogs.filter((value)=>{
                if(value.report === "found"){
                    if(value.breed.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return value
                    }
                }
            }).map((value, id) =>{
                return(
                <div className="dog-card">
                    <h3>{value.name}</h3>
                    <div>
                    <img src={value.image}/>
                    </div>
                    <h4>{value.breed}</h4>
                    <p>{value.age} years</p>
                    <button onClick={(event) => handleDelete(value.id)}>DELETE</button>
                    <Edit pet={value}/>
                </div>
                )
            })}   
        </div>
        </>
    )
}

export default FoundDogs