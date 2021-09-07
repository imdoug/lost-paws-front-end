import React, { useContext, useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import Edit from "./Edit"


const DogsCard = () =>{
    const [dogs, , , handleDelete,,lost,found,reunited,sortData] = useContext(DogContext)
    const [searchTerm, setSearchTerm] = useState("")
    console.log(lost)
    return(
        <>
        <div className="dog-container">
            <div className="input-row">
                <i class="fa fa-search"></i><input className="search" type="text" placeholder="Search by breed" onChange={event =>{setSearchTerm(event.target.value)}}/>
            </div>
        <div className="dogs-show">
            {dogs.filter((value)=>{
                if(searchTerm === ""){
                    return value
                }else if(value.breed.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    console.log(value)
                    return value
                }
            }).map((value, id) =>{
                return(
                <div className="dog-card">
                    <div>
                    <img src={value.image}/>
                    </div>
                    {value.report === 'lost' && <h3 style={lost[1]}>{value.name}</h3>}
                    {value.report === 'found' && <h3 style={found[1]}>{value.name}</h3>}
                    {value.report === 'reunited' && <h3 style={reunited[1]}>{value.name}</h3>}
                    <p>{value.gender} dog</p>
                    <p>{value.location}</p>
                    <p>Report date: {sortData(value.date)}</p>
                    <p>{value.report.toUpperCase()}</p>
                    <button className="info-btn">More information</button>
                    {value.report === 'lost' && <div className="shadow" style={lost[0]}></div>}
                    {value.report === 'found' && <div className="shadow" style={found[0]}></div>}
                    {value.report === 'reunited' && <div className="shadow" style={reunited[0]}></div>}
                    {/* <button onClick={(event) => handleDelete(value.id)}>DELETE</button>
                    <Edit pet={value}/> */}
                </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default DogsCard