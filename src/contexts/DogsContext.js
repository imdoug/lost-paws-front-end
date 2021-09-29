import React, {useState, createContext, useEffect} from"react";
import axios from "axios";

export const DogContext = createContext()

export const DogProvider = (props) =>{
    const [dogs, setDogs] = useState([])
    
    const sortData = (date)=>{
      const splitted = date.split("-")
      splitted.push(splitted.shift())
      const shifted = splitted.join('/')
      return shifted
    }
    const lost = [
      {
        backgroundColor: '#d40073'
        },
        {
          color: "#d40073"
        }
    ]
    const found = [
      {
      backgroundColor: '#75b603'
    },
    {
      color: "#75b603"
    }
  ]
    const reunited = [{
      backgroundColor: '#00bcd4'
    },
    {
      color: "#00bcd4"
    }]
    const handleUpdate = (updatedPet) =>{
      console.log(updatedPet)
        axios
        .put("https://shielded-fortress-14227.herokuapp.com/dog/" + updatedPet.id, updatedPet)
            .then((response)=>{
              console.log(response.data)
              setDogs(response.data)
            })
      }
      const handleCreate = (newPet) =>{
          axios.post("https://shielded-fortress-14227.herokuapp.com/dogs", newPet)
          .then((response)=>{
            console.log(response.data)
            setDogs(response.data)
          })
      }
      const handleDelete = (id) =>{
        axios
          .delete("https://shielded-fortress-14227.herokuapp.com/dog/" + id)
          .then((response)=>{
            console.log(response.data)
            setDogs(response.data)
          })
      }
      const getDogs = () =>{
        axios
          .get("https://shielded-fortress-14227.herokuapp.com/dogs")
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
        <DogContext.Provider value={[dogs, setDogs, handleCreate, handleDelete, handleUpdate,lost,found,reunited,sortData]}>
            {props.children}
        </DogContext.Provider>
        </>
    )
}


