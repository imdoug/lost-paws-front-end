import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Create from './components/Create';
import Edit from './components/Edit';
import Nav from './components/Nav';

function App() {

  const [dogs, setDogs] = useState([])

  useEffect(()=>{
    getDogs()
  }, [])
  // const handleChange = () =>{

  // }  
  const getDogs = () =>{
      axios
        .get("https://polar-garden-08247.herokuapp.com/dogs")
        .then((response)=>{
          console.log(response.data)
          setDogs(response.data)
        })
  }
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

  return (
    <>
    <Nav/>
    <h1><span className="left"><i class="fa fa-paw"></i></span>Angel Paws<span className="right"><i class="fa fa-paw"></i></span></h1>
    <Create handleCreate={handleCreate}/>
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
          <Edit handleUpdate={handleUpdate} pet={dog}/>
        </div>
      )
    })}
    </div>
    </>
  );
}

export default App;
