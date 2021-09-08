import React from "react"
import Alerts from "./Alerts"
import DogsCard from "./DogsCards"

const Home = ()=>{
    return(
        <>
        <div>
            <div className="hero-img">
        </div>
            <Alerts/>
            <DogsCard/>
        </div>
        </>
    )
}
export default Home