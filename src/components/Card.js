import * as React from "react"

const cardStyle = {
    backgroundColor: "#375737",
    width: "350px",
    height: "500px",
    margin: "5%",
    float: "left",
    textAlign: "center"
};

const Card = (props) => {
    return(
        <div style={cardStyle}>
        <p>{props.contents}</p>
        </div>
    );
    }
    export default Card;
