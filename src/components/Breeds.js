import React, { useContext, useState } from "react"
import { BreedContext } from "../contexts/BreedContext"
import { DogContext } from "../contexts/DogsContext"

const Breeds = () =>{
    const [breeds] = useContext(BreedContext)
    const [currentBreed, setCurrentBreed] = useState("")
    const [searchTerm, setSearchTerm] = useState('')
    console.log(breeds)
    const handleChange = (event)=>{
        let name = event.target.value
        setCurrentBreed(name)
        console.log(currentBreed.origin)
    }
    const handleSearch = () =>{
        breeds.filter((val)=>{
            if(searchTerm = ""){
                return ""
            }else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                console.log(val)
            }

        })
 
    }
    return(
        <>
        <div>
            <div id="banner-message">
                <p>Select a Breed</p>
                <input id="breed_search" placeholder="Search..." onChange={event =>()=>{setSearchTerm(event.target.value)}}/>
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
                        <h1>{filteredBreed.name}</h1>
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