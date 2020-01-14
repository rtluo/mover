import React, {useState} from "react"
import initial from "../initial"
import Square from "./Square"

const Board = () => {
    let data = initial
    console.log(data[3])
    const [boardState, setBoardState] = useState(data)
    const findBlack = array => {
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 8; j++){
                if (array[i][j] === "black"){
                    return(
                        [i, j]
                    )
                }
            }
        }
    }
    const handleKeyPress = e => {
        const coords = findBlack(boardState)
        switch (e.keyCode){
            case 37:        
                try{
                    data[coords[0]][coords[1] - 1] = "black"
                    data[coords[0]][coords[1]] = "white"
                    console.log(data[3])
                }
                catch{}
                break;
            case 38:
                try{
                    data[coords[0] - 1][coords[1]] = "black"
                    data[coords[0]][coords[1]] = "white"
                }
                catch{}
                break;
            case 39:
                try{
                    data[coords[0]][coords[1] + 1] = "black"
                    data[coords[0]][coords[1]] = "white"
                }
                catch{}
                break;
            case 40:
                try{
                    data[coords[0] + 1][coords[1]] = "black"
                    data[coords[0]][coords[1]] = "white"
                }
                catch{}
                break;
            default:
        }
        console.log(data[3])
        setBoardState(data)
        console.log(boardState[3])
    }
    let squares = [[],[],[],[],[],[],[],[]];
    document.addEventListener("keydown", event => handleKeyPress(event))
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            squares[i][j] = <Square key={(i, j)} coord1={i} coord2={j} state={boardState}/>
        }
    }
    let boardStyle = {
        backgroundColor: "brown",
        width: "24rem",
        height: "24rem",
        display: "grid"
    }
    return (
        <div style={boardStyle}>
            {squares}
        </div>
    )
}

export default Board