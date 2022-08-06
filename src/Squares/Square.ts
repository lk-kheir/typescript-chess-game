import {Files} from "./../Positions/File";
import {Rank} from "./../Positions/Rank";
import {SquareColor} from "./SquareColor";

class Square{
    private file: Files;
    private rank: Rank;
    private squareColor: SquareColor;
    private isOccupied:Boolean = false;
    private isDanger:Boolean = false;

    constructor(file: Files , rank :Rank , squareColor: SquareColor) {
        this.file = file;
        this.rank = rank;
        this.squareColor = squareColor;
    }

    showSquareInfo():void {
        console.log(`square ${this.file}${this.rank}`)
    }
}