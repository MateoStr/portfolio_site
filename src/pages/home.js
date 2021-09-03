import * as React from "react"
import Card from "./../components/Card.js"
import Navbar from "./../components/Navbar.js"
import Eyecatch from "./../components/Eyecatch.js"
import ProjectsHolder from "./../components/ProjectsHolder.js"
import Bio from "./../components/Bio.js"

//Styles
const wrapperStyle = {
    minHeight : "100vh",
    minWidth : "100vw",
    backgroundColor : "#6b6b6b",
    margin : "0",
    left : "0",
    position : "absolute",
    zIndex : "-2"
}

const Home = () => {
    return(
        <> 
        <div id = "wrapper" style = {wrapperStyle}>
        <Navbar />
        <Eyecatch />
        <Bio />
        <ProjectsHolder />
        </div>
        </>
    );
}


export default Home;