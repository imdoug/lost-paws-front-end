import React, { useContext, useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"

const DogDetail = ({match}) =>{
    const [dogs, , , handleDelete,handleUpdate,lost,found,reunited,sortData] = useContext(DogContext)
    const [reuninted, setReunited] = useState("")
    const id  = parseInt(match.params.id)
    const dogReunited = (dog)=>{
        dog.report = "reunited"
        handleUpdate(dog)
    }
    return(
        <>
        {dogs.filter(dog => dog.id == id).map((filteredDog)=>{
            return(<>
                <div className="dog-detail">
                    <div>
                    <img src={filteredDog.image}/>
                    </div>
                    {filteredDog.report === 'lost' && <h3 style={lost[1]}>{filteredDog.name}</h3>}
                    {filteredDog.report === 'found' && <h3 style={found[1]}>{filteredDog.name}</h3>}
                    {filteredDog.report === 'reunited' && <h3 style={reunited[1]}>{filteredDog.name}</h3>}
                    <p >{filteredDog.gender === "i do not know" ? "N/A" : filteredDog.gender.toUpperCase()} DOG</p>
                    <p className="up">Breed: {filteredDog.breed}</p>
                    <p className="card-location"><b>{filteredDog.location}</b></p>
                    { filteredDog.report === 'lost' &&<p className="up">Lost since: {sortData(filteredDog.date)}</p>}
                    { filteredDog.report === 'found' && <p className="up">Found since: {sortData(filteredDog.date)}</p>}
                    { filteredDog.report === 'reunited' && <p className="up">Posted since: {sortData(filteredDog.date)}</p>}
                    <p>Age: {filteredDog.age} year(s)</p>
                    <p>Size: {filteredDog.size}</p>
                    <p className="up">Spayed/Neutured: "{filteredDog.neutured}"</p>
                    <p>Color: {filteredDog.color}</p>
                    <p>Fur: {filteredDog.fur}</p>
                    <p className="up">Ears: {filteredDog.ears}</p>
                    <p>Comments:</p>
                    <p  className="up">{filteredDog.comments}</p>
                    {filteredDog.report === 'lost' && <p className="title up" style={lost[1]}>{filteredDog.report.toUpperCase()}</p>}
                    {filteredDog.report === 'found' && <p className="title up" style={found[1]}>{filteredDog.report.toUpperCase()}</p>}
                    {filteredDog.report === 'reunited' && <p className="title up" style={reunited[1]}>{filteredDog.report.toUpperCase()}</p>}
                    {filteredDog.report === "reunited" ?  <button className="change-report up" onClick={(event) => handleDelete(filteredDog.id)}>DELETE</button> : <button className="change-report up" onClick={(event) => dogReunited(filteredDog)}>REUNITED</button>}
                    <Edit pet={filteredDog}/>
                    {filteredDog.report === 'lost' && <div className="shadow" style={lost[0]}></div>}
                    {filteredDog.report === 'found' && <div className="shadow" style={found[0]}></div>}
                    {filteredDog.report === 'reunited' && <div className="shadow" style={reunited[0]}></div>}
                </div>
            </>
            )
        })}
        </>
    )
}

export default DogDetail