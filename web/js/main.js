/**
 * Created by Vesdet on 29.04.2016.
 */
var elements = document.getElementsByClassName("cell");
elements[2].classList.add('cell-2');
var desk = [];
for (var i = 0; i < 16; i++) {
    desk[i] = 0;
}
desk[2] = 2;

document.addEventListener("keydown", function (event) {
    if (event.which === 38) {   // top
        up();
        randTwo();
    }
    if (event.which === 39) {   // right
        right();
        randTwo();
    }
    if (event.which === 40) {   // bottom
        bottom();
        randTwo();
    }
    if (event.which === 37) {   // left
        left();
        randTwo();
    }
});

var randTwo = function () {
    var rand = Math.floor(Math.random() * 16);
    if (desk[rand] == 0) {
        elements[rand].classList.add('cell-2');
        desk[rand] = 2;
    } else randTwo();
};

var left = function () {
    moveHorizontal(1, -1);
    moveHorizontal(2, -1);  moveHorizontal(1, -1);
    moveHorizontal(3, -1);  moveHorizontal(2, -1);  moveHorizontal(1, -1);
};

var right = function () {
    moveHorizontal(2, 1);
    moveHorizontal(1, 1);  moveHorizontal(2, 1);
    moveHorizontal(0, 1);  moveHorizontal(1, 1);  moveHorizontal(2, 1);
};

var bottom = function () {
    moveVertical(2, 4);
    moveVertical(1, 4);  moveVertical(2, 4);
    moveVertical(0, 4);  moveVertical(1, 4);  moveVertical(2, 4);
};

var up = function () {
    moveVertical(1, -4);
    moveVertical(2, -4);  moveVertical(1, -4);
    moveVertical(3, -4);  moveVertical(2, -4);  moveVertical(1, -4);
};

var moveHorizontal = function (count, direction) {
    desk.forEach(function (item, i, desk) {
        if (item == 0) return;
        if (i % 4 == count) {
            if (desk[i + direction] == 0) {
                changeClass(i, i + direction, item, item);
                return;
            }
            if (desk[i + direction] == item) changeClass(i, i + direction, item, item * 2);
        }
    })
};

var moveVertical = function (count, direction) {
    desk.forEach(function (item, i, desk) {
        if (item == 0) return;
        if (Math.floor(i / 4) == count) {
            if (desk[i + direction] == 0) {
                changeClass(i, i + direction, item, item);
                return;
            }
            if (desk[i + direction] == item) changeClass(i, i + direction, item, item * 2);
        }
    })
};

var changeClass = function (id1, id2, cl, cl2) {
    desk[id1] = 0;  desk[id2] = cl2;
    elements[id1].classList.remove  (intToClass(cl));
    if (cl !== cl2) elements[id2].classList.remove(intToClass(cl));
    elements[id2].classList.add     (intToClass(cl2));
};

var intToClass = function (number) {
    if (number == 2)    return 'cell-2';
    if (number == 4)    return 'cell-4';
    if (number == 8)    return 'cell-8';
    if (number == 16)   return 'cell-16';
    if (number == 32)   return 'cell-32';
    if (number == 64)   return 'cell-64';
    if (number == 128)  return 'cell-128';
    if (number == 256)  return 'cell-256';
    if (number == 512)  return 'cell-512';
    if (number == 1024) return 'cell-1024';
    if (number == 2048) return 'cell-2048';
};