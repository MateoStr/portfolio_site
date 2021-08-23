import * as React from 'React'
import NavbarItem from './NavbarItem.js'


//styling
const NavbarItemHolderStyle = {
    listStyle : "none"
}


//array of JSON objects containing links for navbar
//label corresponds to the text acting as the hyperlink
//link represents the href attribute of the hyperlink
//link will in the future link to different pages of this website
let links = [
    {"label": "Test1", "link" : "https://www.google.com"},
    {"label":  "Test2", "link" : "https://www.facebook.com"},
    {"label":  "Test3", "link" : "https://www.youtube.com"},
    {"label":  "Test4", "link" : "https://www.github.com"},
    {"label":  "Test5", "link" : "https://www.bethesda.net"}
];

let itemList = links.map((item) =>
    (
        <NavbarItem label = {item.label} link = {item.link} />
    ));


const NavbarItemHolder = () => {
    return(<>
        <ul style = {NavbarItemHolderStyle}>
            {itemList}
        </ul>
        </>
    )
}

export default NavbarItemHolder;