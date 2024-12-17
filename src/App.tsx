import './App.css'
import BoardComponent from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";
import {Player} from "./models/Player.ts";
import {Colors} from "./models/Colors.ts";
import LostFigures from "./components/LostFigures.tsx";

function App() {
    const [board, setBoard] = useState<Board>(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));

    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        setBoard(newBoard)
        newBoard.addFigures()
        setCurrentPlayer(whitePlayer)
    }

    function swapPlayer() {
        if (currentPlayer?.color === Colors.BLACK) {
            setCurrentPlayer(whitePlayer)
        } else {
            setCurrentPlayer(blackPlayer)
        }
    }

    return (
        <div className={"app"}>
            <BoardComponent
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
                board={board} setBoard={setBoard}/>
            <div className={"lost-figures-box"}>
                <LostFigures title={"Black figures"} figures={board.lostBlackFigures}/>
                <LostFigures title={"White figures"} figures={board.lostWhiteFigures}/>
            </div>
        </div>
    )
}

export default App
