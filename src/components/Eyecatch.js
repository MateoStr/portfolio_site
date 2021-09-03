//imports
import * as React from "react"

//styles
const eyeCatchStyle = {
    width : "100vw",
    height: "45vh",
    marginTop : "70px",
    left : "0",
    right : "0",
    position: "relative",
    backgroundColor: "#171717",
    textAlign : "center",
    verticalAlign : "middle",
    zIndex : "-2"
}

const eyecatchTextStyle = {
    position: "relative"
}

const imgStyle = {
    objectFit: "cover",
    zIndex: "-1"
}

//elements
const Eyecatch = () => {
    return(
        <div id = "eyecatch" style = {eyeCatchStyle}>
            <img src = "../images/eyecatch.jpg" alt = "gulf islands BC" style = {imgStyle}/>
            <h1 style = {eyecatchTextStyle}>TODO</h1>
                
                
        
        </div>
        
)}

export default Eyecatch;