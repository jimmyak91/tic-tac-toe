

const gameSquare = document.querySelectorAll('.gameBoardSquare');



// console.log(gameSquare);

const GameBoard = (() => {
    var board = [];
    // const addMove = (square, player) => {
    //     if (player === 'player 1') {
    //         board[square] = 'X'
    //     }
    //     else {
    //         board[square] = 'O'
    //     }
    // }
    return {
        board
    }
}
)();

const Player = (name) => {
    const getName = () => name;

    const move = (getName) => {


    }
    
    return {getName}
};

function gameController() {
    var current = GameBoard.board;
    
    for (let i=0; i < current.length; i++) {
        var thisMove = document.getElementById(i);
        //thisMove.innerHTML(current[i]);
        if (typeof current[i] !== 'undefined')
        thisMove.innerHTML = current[i];
    }
   
}

gameController();

const player1 = Player('Player 1');
const player2 = Player('Player 2');
var currentPlayer = player1;

function addMove (player, square) {

    if (player === 'Player 1') {
        GameBoard.board[square] = 'X';
        currentPlayer = player2;
        console.log(currentPlayer.getName());
    }
    else if (player === 'Player 2') {
        GameBoard.board[square] = 'O'
        currentPlayer = player1;
    }

    
    gameController();
}

gameSquare.forEach(square => square.addEventListener('click', () => addMove(currentPlayer.getName(), square.id)));

