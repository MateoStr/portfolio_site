import * as React from "react"

const NavbarItemStyle = {
    fontSize: "30px",
    padding: "5px",
    display : "inline",
    float: "left",
    right: "0",
    marginRight : "4px",
    borderRadius: "10px",
    backgroundColor: "#404040",
    color: "white",
    visittedColor: "white",
    textDecoration: "none"
}


const NavbarItem = (props) => {
    return(
       <li><a href = {props.link} style = {NavbarItemStyle}>{props.label}</a></li>
    )
}

export default NavbarItem;