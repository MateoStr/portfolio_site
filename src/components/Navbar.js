import React from 'react'
import NavbarItem from './NavbarItem.js'


//Styles
const NavbarStyle = {
    width : "100%",
    padding: "10px",
    margin : "0px",
    backgroundColor : "#1c1c1c",
    top : "0",
    left : "0",
    right : "0",
    position : "fixed",
    zIndex : "1"
};

const LogoStyle = {
    "textAlign" : "left",
    "marginLeft" : "25px"
};

//Elements

const Navbar = (props) => {
    return(
        <div style={NavbarStyle} id = "Navbar">
            <div style = {LogoStyle}>
                <h2><b>Mateo Strasdas</b></h2>
            </div>
            <NavbarItem label = "TEST" link = "https://www.google.com" />
        </div>
    );
}

export default Navbar;