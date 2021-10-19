const GameBoard = (() => {
    var board = ['x', 'o', 'x', 'x', 'o', 'x', 'x', 'o', 'x'];
    return {
        board
    }
}
)();

const Player = (name) => {
    const getName = () => name;

    return {getName}
};

function displayController() {
    var current = GameBoard.board;
    
    for (let i=0; i < current.length; i++) {
        var thisMove = document.getElementById(i);
        //thisMove.innerHTML(current[i]);
        console.log(thisMove);
        thisMove.innerHTML = current[i];
    }
   
}

displayController();