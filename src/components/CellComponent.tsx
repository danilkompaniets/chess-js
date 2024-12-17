import {Cell} from "../models/Cell.ts";
import {FC} from "react";

interface CellProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void,
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div className={['cell', cell.color, selected ? "selected" : ""].join(" ")} onClick={() => click(cell)}

        style={{backgroundColor: cell.available && cell.figure ? "green" : ""}}>
            {cell.available && !cell.figure && <div className={"avaliable"}/>}
            {cell.figure?.logo && <img src={cell.figure.logo}/>}
        </div>
    );
};

export default CellComponent;