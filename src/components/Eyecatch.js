import * as React from "react"
//import * as THREE from 'three'

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
    zIndex : "-1"
}

const eyecatchTextStyle = {
    position: "relative"
}




function THREE(){
    alert("Hello!");
}
//elements
const Eyecatch = () => {
    return(
        <div id = "eyecatch" style = {eyeCatchStyle}>
            <script>THREE()</script>
            <h1 style = {eyecatchTextStyle}>TODO</h1>
                
                
        
        </div>
        
)}

export default Eyecatch;