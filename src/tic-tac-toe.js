class TicTacToe {
    constructor(columns =3, rows = 3) {
        this.field = Array.from({ length: columns }, () => Array.from({ length: rows }, () => null));
        this.turn = 0;
        this.MaxTurn = 9;       
    }
    getCurrentPlayerSymbol() {       
        return !(this.turn % 2) && 'x' || 'o';        
    }
    nextTurn(rowIndex, columnIndex) {       
        (this.field[rowIndex][columnIndex] == null) && (this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()) && (this.turn += 1);
    }
    isFinished() {       
        return (this.noMoreTurns() || this.getWinner()) && true || false;
    }
    getWinner() {
        let result = null;       
        if(this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) {result = this.field[0][0];}
        else if(this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2]) {result = this.field[2][0];}
        else 
        for(let x=0; x<3; x++) {
            (this.field[x][0] == this.field[x][1] && this.field[x][1] == this.field[x][2]) && (result = this.field[x][0]) ||            
            (this.field[0][x] == this.field[1][x] && this.field[1][x] == this.field[2][x]) && (result = this.field[0][x]);                      
        };
        return result;
    }
    noMoreTurns() {        
        return (this.turn == this.MaxTurn) && true || false;
    }
    isDraw() {               
        return (this.noMoreTurns() && !this.getWinner()) && true || false;
    }
    getFieldValue(rowIndex, colIndex) {      
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;