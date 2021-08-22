import * as React from "react"

const NavbarItemStyle = {
    size: "20px"

}


const NavbarItem = (props) => {
    return(
        <a href = {props.link}>{props.label}</a>
    )
}

export default NavbarItem;