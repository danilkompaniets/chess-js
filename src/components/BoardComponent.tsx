import {Board} from "../models/Board.ts";
import React, {FC, useEffect, useState} from "react";
import CellComponent from "./CellComponent.tsx";
import {Cell} from "../models/Cell.ts";
import {Player} from "../models/Player.ts";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            swapPlayer()
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }

    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])


    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()

    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3 style={{marginBottom: "10px"}}>
                Current player: {currentPlayer?.color}
            </h3>
            <div className={"board"}>
                {board.cells.map((row, idx) => (
                    <React.Fragment key={idx}>
                        {row.map((cell, rowIndex) => (
                            <CellComponent cell={cell} key={rowIndex}
                                           click={click}
                                           selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        ))}
                    </React.Fragment>
                ))}

            </div>
        </div>
    );
};

export default BoardComponent;