import React, { useContext, useState } from "react"
import { BreedContext } from "../contexts/BreedContext"

const Breeds = () =>{
    const [breeds] = useContext(BreedContext)
    const [currentBreed, setCurrentBreed] = useState("")
    console.log(breeds)
    const handleChange = (event)=>{
        let name = event.target.value
        setCurrentBreed(name)
    }
    return(
        <>
        <div>
            <div id="banner-message">
                <p>Select a Breed</p>
                <select name="breed" onChange={(event) =>{handleChange(event)}} class="breed_select">
                    {breeds.map((breed)=>{
                        return(
                            <>
                                <option id={breed.id} value={breed.name}>{breed.name}</option>
                            </>
                        )
                    })}
                </select>
            </div>
            <div id="breed_data">
                {currentBreed !== ""
                ? 
                <>
                {breeds.filter(breed => breed.name === currentBreed).map(filteredBreed =>(
                    <>
                    <div>
                        <h1 className="centered">{filteredBreed.name}</h1>
                        <img src={filteredBreed.image.url}></img>
                        <p>Lifespan: <span>{filteredBreed.life_span}</span></p>
                        <p>height: <span>{filteredBreed.height.metric}</span></p>
                        <p>weight: <span>{filteredBreed.weight.metric}</span></p>
                        {filteredBreed.origin ? <p>Origin: <span>{}{filteredBreed.origin}</span></p> : <></>}
                        {filteredBreed.breed_group ? <p>Breed group: <span>{filteredBreed.breed_group}</span></p>: <></>}
                        {filteredBreed.bred_for ? <p>Breed for: <span>{filteredBreed.bred_for}</span></p> : <></>}
                        <p>Temperament: <span>{filteredBreed.temperament}</span></p>
                    </div>
                    </>
                ))}
                </>
                : 
                <></>}
            </div>
        </div>
        </>
    )
}

export default Breeds