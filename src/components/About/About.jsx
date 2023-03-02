import React from "react"
import style from "./about.module.css"
export default function About (props){

    return(
        <div className={style.containerAbout}>
           <h2>  About Creator </h2> 
           <img src="https://i.pinimg.com/280x280_RS/13/36/2a/13362aed4f2f566e6ecc7bc967cbd5aa.jpg" />
           <p>Nombre : <b>Breyner Eduardo Arias</b></p>
           <p>Edad : <b>31 años</b></p>
           <p>Stack Of Dev</p>
           <ol>
                <li><b>Js</b></li>
                <li><b>HTML</b></li>
                <li><b>Css</b></li>
                <li><b>React</b></li>
                <li><b>Redux</b></li>
                <li><b>Node</b></li>
                <li><b>Express</b></li>
                
            </ol>
        </div>
    )


}