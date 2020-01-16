import React from "react"

const Square = props => {
    let styles = {}
    props.state === "white" ?
    styles = {
        backgroundColor: "white",
        height: "3rem",
        width: "3rem",
        gridColumn: props.coord2 + 1,
        borderStyle: "solid",
        borderWidth: "0.2rem"
    }:
    styles = {
        backgroundColor: "black",
        height: "3rem",
        width: "3rem",
        gridColumn: props.coord2 + 1,
        borderStyle: "solid",
        borderWidth: "0.2rem"
    }

    return (
        <div className="square" style={styles}>{props.state}</div>
    )
}

export default Square