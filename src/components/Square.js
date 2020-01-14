import React from "react"

const Square = props => {
    return (
        <div className = "square" style={{
            backgroundColor: props.state[props.coord1][props.coord2],
            height: "3rem",
            width: "3rem",
            gridColumn: props.coord2 + 1,
            borderStyle: "solid",
            borderWidth: "0.2rem"
        }}></div>
    )
}

export default Square