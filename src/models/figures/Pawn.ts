import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";

import whiteLogo from "../../assets/white-pawn.png";
import blackLogo from "../../assets/black-pawn.png"

export class Pawn extends Figure {
    isFirstStep = true

    constructor(color: Colors, cell: Cell) {
        console.log(cell);

        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

        if ((target.y === this.cell.y + direction || this.isFirstStep
                && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }
        
        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + direction || target.x === this.cell.x - direction)
            && this.cell.isEnemy(target)) {
            return true
        }

        return false;

        
    }


    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }

}