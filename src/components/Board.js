import React, {useState, useEffect} from "react"
import initial from "../initial"
import Square from "./Square"

const Board = () => {
    const [boardState, setBoardState] = useState(initial)
    useEffect (() => {
        const handleKeyPress = e => {
            let data = [...initial]
            let newData = [...data]
            let coords = findBlack(newData)
            switch (e.keyCode){
                case 37:        
                    if (coords[1] > 0){
                        newData[coords[0]][coords[1] - 1] = "black"
                        newData[coords[0]][coords[1]] = "white"
                    }
                    break;
                case 38:
                    if (coords[0] > 0){
                        newData[coords[0] - 1][coords[1]] = "black"
                        newData[coords[0]][coords[1]] = "white"
                    }
                    break;
                case 39:
                    if (coords[1] < 7){
                        newData[coords[0]][coords[1] + 1] = "black"
                        newData[coords[0]][coords[1]] = "white"
                    }
                    break;
                case 40:
                    if (coords[0] < 7){
                        newData[coords[0] + 1][coords[1]] = "black"
                        newData[coords[0]][coords[1]] = "white"
                    }
                    break;
                default:
            }
            setBoardState(newData)
        }
        document.addEventListener("keydown", handleKeyPress)
    }, [])
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
    const renderSquare = (i, j) => {
        return (
            <Square key={i*10+j} coord1={i} coord2={j} state={boardState[i][j]}/>
        )
    }
    const renderSquares = () => {
        let squares = [[],[],[],[],[],[],[],[]]
        for (let i = 0; i < 8; i++){
            for (let j = 0; j < 8; j++){
                squares[i][j] = <Square key={i*10+j} coord1={i} coord2={j} state={boardState[i][j]}/>
            }
        }
        return (
            squares
        )
    }
    const boardStyle = {
        backgroundColor: "brown",
        width: "24rem",
        height: "24rem",
        display: "grid"
    }
    return (
        <div style={boardStyle}>
            {
            renderSquares()
            /* {renderSquare(0,0)}
            {renderSquare(0,1)}
            {renderSquare(0,2)}
            {renderSquare(0,3)}
            {renderSquare(0,4)}
            {renderSquare(0,5)}
            {renderSquare(0,6)}
            {renderSquare(0,7)}
            {renderSquare(1,0)}
            {renderSquare(1,1)}
            {renderSquare(1,2)}
            {renderSquare(1,3)}
            {renderSquare(1,4)}
            {renderSquare(1,5)}
            {renderSquare(1,6)}
            {renderSquare(1,7)}
            {renderSquare(2,0)}
            {renderSquare(2,1)}
            {renderSquare(2,2)}
            {renderSquare(2,3)}
            {renderSquare(2,4)}
            {renderSquare(2,5)}
            {renderSquare(2,6)}
            {renderSquare(2,7)}
            {renderSquare(3,0)}
            {renderSquare(3,1)}
            {renderSquare(3,2)}
            {renderSquare(3,3)}
            {renderSquare(3,4)}
            {renderSquare(3,5)}
            {renderSquare(3,6)}
            {renderSquare(3,7)}
            {renderSquare(4,0)}
            {renderSquare(4,1)}
            {renderSquare(4,2)}
            {renderSquare(4,3)}
            {renderSquare(4,4)}
            {renderSquare(4,5)}
            {renderSquare(4,6)}
            {renderSquare(4,7)}
            {renderSquare(5,0)}
            {renderSquare(5,1)}
            {renderSquare(5,2)}
            {renderSquare(5,3)}
            {renderSquare(5,4)}
            {renderSquare(5,5)}
            {renderSquare(5,6)}
            {renderSquare(5,7)}
            {renderSquare(6,0)}
            {renderSquare(6,1)}
            {renderSquare(6,2)}
            {renderSquare(6,3)}
            {renderSquare(6,4)}
            {renderSquare(6,5)}
            {renderSquare(6,6)}
            {renderSquare(6,7)}
            {renderSquare(7,0)}
            {renderSquare(7,1)}
            {renderSquare(7,2)}
            {renderSquare(7,3)}
            {renderSquare(7,4)}
            {renderSquare(7,5)}
            {renderSquare(7,6)}
            {renderSquare(7,7)} */}
        </div>
    )
}

export default Board