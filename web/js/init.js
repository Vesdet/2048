/**
 * Created by Vesdet on 02.05.2016.
 */
var elements = document.getElementsByClassName("cell");
var desk = [];
var booleanDesk = [];
var score = 0;

var newGame = function () {
    clearClasses();
    for (var i = 0; i < 16; i++) {
        desk[i] = 0;
    }
    clearBooleanDesk();
    score = 0;
    updateScore();
    randTwo();
    randTwo();
    document.getElementById('win').classList.remove('container-state');
    document.getElementById('win').classList.add('none');
    document.getElementById('lose').classList.remove('container-state');
    document.getElementById('lose').classList.add('none');
};

newGame();




