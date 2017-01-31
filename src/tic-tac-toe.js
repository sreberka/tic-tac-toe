class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.rIndex = null;
        this.cIndex = null;
        this.symbol = 'x';

    }

    getCurrentPlayerSymbol() {
        return this.symbol
    }

    nextTurn(rowIndex, columnIndex) {
        this.rIndex = rowIndex;
        this.cIndex = columnIndex;
        if(this.matrix[this.rIndex][this.cIndex] === null){
            this.matrix[this.rIndex][this.cIndex] = this.symbol;
            if(this.symbol === 'x'){
                this.symbol = 'o';
            }
            else{
                this.symbol = 'x';
            }

        }
        else{
            this.getCurrentPlayerSymbol();
        }
    }

    isFinished() {
        if(this.matrix[0][0] != null && this.matrix[0][1] != null && this.matrix[0][2] != null && this.matrix[1][0] != null && this.matrix[1][1] != null && this.matrix[1][2] != null && this.matrix[2][0] != null && this.matrix[2][1] != null && this.matrix[2][2] != null || this.getWinner() != null){
            return true
        }
        else{
            return false
        }
    }

    getWinner() {
        if(this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2] ){
            return this.matrix[0][2];
        }
        else{
            if(this.matrix[1][0] !== null && this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2]){
                return this.matrix[1][2];
            }
            else {
                if(this.matrix[2][0] !== null && this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2]){
                    return this.matrix[2][2];
                }
                else{
                    if(this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]){
                        return this.matrix[2][2];
                    }
                    else{
                        if(this.matrix[0][2] !== null && this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]){
                            return this.matrix[2][0]
                        }
                        else{
                            if(this.matrix[0][0] !== null && this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0]){
                                return this.matrix[2][0]
                            }
                            else{
                                if(this.matrix[0][1] !== null && this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1]){
                                    return this.matrix[2][1]
                                }
                                else{
                                    if(this.matrix[0][2] !== null && this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2]){
                                        return this.matrix[2][2]
                                    }
                                    else{
                                        return null;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }

    noMoreTurns() {
        if(this.matrix[0][0] === null || this.matrix[0][1] === null || this.matrix[0][2] === null || this.matrix[1][0] === null || this.matrix[1][1] === null || this.matrix[1][2] === null || this.matrix[2][0] === null || this.matrix[2][1] === null || this.matrix[2][2] === null){
            return false
        }
        else{
            return true
        }
    }

    isDraw() {
        if(this.isFinished() === false || this.getWinner() != null){
            return false
        }
        else{
            return true
        }
    }

    getFieldValue(rowIndex, colIndex) {
        this.rIndex = rowIndex;
        this.cIndex = colIndex;
        return this.matrix[this.rIndex][this.cIndex]
    }
}

module.exports = TicTacToe;
