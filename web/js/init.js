/**
 * Created by Vesdet on 02.05.2016.
 */
var elements = document.getElementsByClassName("cell");
var desk = [];
for (var i = 0; i < 16; i++) {
    desk[i] = 0;
}
var booleanDesk = [];
randTwo();
randTwo();

var clearBooleanDesk = function () {
    for (var i = 0; i < 16; i++) {
        booleanDesk[i] = false;
    }
};
clearBooleanDesk();