import React, { useContext } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"


const DogsCard = () =>{
    const [dogs, , , handleDelete] = useContext(DogContext)
    return(
        <>
        <div className="dogs-show">
            {dogs.map((dog, id) =>{
                return(
                <div className="dog-card">
                    <h3>{dog.name}</h3>
                    <div>
                    <img src={dog.image}/>
                    </div>
                    <h4>{dog.breed}</h4>
                    <p>{dog.age} years</p>
                    <button onClick={(event) => handleDelete(dog.id)}>DELETE</button>
                    <Edit pet={dog}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default DogsCard