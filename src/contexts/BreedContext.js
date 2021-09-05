import React, {useState, createContext, useEffect} from "react";
import axios from "axios";

export const BreedContext = createContext()

export const BreedProvider = (props)=>{
    const [breeds, setBreeds] = useState([])
    const getBreeds = () =>{
        axios
          .get("https://api.thedogapi.com/v1/breeds?X-Api-Key=001ef6dd-e793-4732-a643-4f933f1fc92e")
          .then((response)=>{
            setBreeds(response.data)
          })
    }

    useEffect(()=>{
        getBreeds()
    }, [])

    return(
        <>
        <BreedContext.Provider value={[breeds, setBreeds]}>
            {props.children}
        </BreedContext.Provider>
        </>
    )

}
