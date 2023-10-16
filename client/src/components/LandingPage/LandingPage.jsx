import React from "react";
import {Link} from "react-router-dom"
import style from "./LandingPage.module.css"

const LandingPage = ()=>{
    return(
        <div className={style.container}>
            <h1 className="text-center">Welcome to my aplication</h1>
            <button><Link to="/home"> Click to enter</Link></button>
            
        </div>
    ) 
}

export default LandingPage; 