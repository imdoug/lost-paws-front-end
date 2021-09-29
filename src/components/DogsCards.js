import React, { useContext, useState } from "react"
import { DogContext } from "../contexts/DogsContext"
import { Link } from "react-router-dom"
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
                    {value.report_type === 'lost' && <h3 style={lost[1]}>{value.name}</h3>}
                    {value.report_type === 'found' && <h3 style={found[1]}>{value.name}</h3>}
                    {value.report_type === 'reunited' && <h3 style={reunited[1]}>{value.name}</h3>}
                    <p className="up">{value.gender.toUpperCase()} DOG</p>
                    <p className="card-location"><b>{value.location}</b></p>
                    { value.report_type === 'lost' &&<p className="up">Lost since: {sortData(value.date)}</p>}
                    { value.report_type === 'found' && <p className="up">Found since: {sortData(value.date)}</p>}
                    { value.report_type === 'reunited' && <p className="up">Posted since: {sortData(value.date)}</p>}
                    {value.report_type === 'lost' && <p className="title up" style={lost[1]}>{value.report_type.toUpperCase()}</p>}
                    {value.report_type === 'found' && <p className="title up" style={found[1]}>{value.report_type.toUpperCase()}</p>}
                    {value.report_type === 'reunited' && <p className="title up" style={reunited[1]}>{value.report_type.toUpperCase()}</p>}
                    <Link to={`dogs/${value.id}`}><button className="info-btn">More information</button></Link>
                    {value.report_type === 'lost' && <div className="shadow" style={lost[0]}></div>}
                    {value.report_type === 'found' && <div className="shadow" style={found[0]}></div>}
                    {value.report_type === 'reunited' && <div className="shadow" style={reunited[0]}></div>}
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