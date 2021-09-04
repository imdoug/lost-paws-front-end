import React, {useState, createContext, useEffect} from"react";
import axios from "axios";

export const DogContext = createContext()

export const DogProvider = (props) =>{
    const [dogs, setDogs] = useState([])
    const handleUpdate = (updatedPet) =>{
        axios
        .put("https://polar-garden-08247.herokuapp.com/dog/" + updatedPet.id, updatedPet)
            .then((response)=>{
              console.log(response.data)
              setDogs(response.data)
            })
      }
      const handleCreate = (newPet) =>{
          axios.post("https://polar-garden-08247.herokuapp.com/dogs", newPet)
          .then((response)=>{
            console.log(response.data)
            setDogs(response.data)
          })
      }
      const handleDelete = (id) =>{
        axios
          .delete("https://polar-garden-08247.herokuapp.com/dog/" + id)
          .then((response)=>{
            console.log(response.data)
            setDogs(response.data)
          })
      }
      const getDogs = () =>{
        axios
          .get("https://polar-garden-08247.herokuapp.com/dogs")
          .then((response)=>{
            console.log(response.data)
            setDogs(response.data)
          })
      }
    
      useEffect(()=>{
        getDogs()
      }, [])
      
    return(
        <>
        <DogContext.Provider value={[dogs, setDogs, handleCreate, handleDelete, handleUpdate]}>
            {props.children}
        </DogContext.Provider>
        </>
    )
}


