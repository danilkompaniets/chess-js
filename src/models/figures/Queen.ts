import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";

import whiteLogo from "../../assets/white-queen.png";
import blackLogo from "../../assets/black-queen.png"

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyVertical(target)) {
            return true
        }

        if (this.cell.isEmptyHorizontal(target)) {
            return true
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}