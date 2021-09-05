import React, { useContext } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"

const  FoundDogs = () =>{
    const [dogs,,,handleDelete, handleUpdate] = useContext(DogContext)
    return (
        <>
        <div>
        {dogs.filter(dog => dog.report === 'found').map(filteredDog =>(
            <>
            <div className="dog-card">
                    <h3>{filteredDog.name}</h3>
                    <div>
                    <img src={filteredDog.image}/>
                    </div>
                    <h4>{filteredDog.breed}</h4>
                    <p>{filteredDog.age} years</p>
                    <button onClick={(event) => handleDelete(filteredDog.id)}>DELETE</button>
                    <Edit handleUpdate={handleUpdate} pet={filteredDog}/>
                </div>
            </>
            ))}   
        </div>
        </>
    )
}

export default FoundDogs