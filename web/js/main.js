/**
 * Created by Vesdet on 29.04.2016.
 */
var elements = document.getElementsByClassName("cell");
var select = 0;
elements[select].classList.add('select');

var changeSelect = function (inc) {
    var tmp = select + inc;
    if (tmp >= 0 && tmp <=15) {
        setSelectClass(tmp);
    }
};

var setSelectClass = function (id) {
    elements[select].classList.remove('select');
    select = id;
    elements[id].classList.add('select');
};

document.addEventListener("keydown", function (event) {
    if (event.which === 38) {
        changeSelect(-4);
    }
    if (event.which === 39) {
        changeSelect(1);
    }
    if (event.which === 40) {
        changeSelect(4);
    }
    if (event.which === 37) {
        changeSelect(-1);
    }
});