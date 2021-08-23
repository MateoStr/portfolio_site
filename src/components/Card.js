import * as React from "react"

const cardStyle = {
    backgroundColor: "#375737",
    width: "350px",
    height: "500px",
    margin: "5%",
    paddingLeft:"20px",
    paddingRight:"20px",
    float: "left",
    textAlign: "center",
    borderRadius: "15px"
};

const Card = (props) => {
    return(
        <div style={cardStyle}>
            <h1>{props.cardTitle}</h1>
        <p>{props.contents}</p>
        </div>
    );
    }
    export default Card;
