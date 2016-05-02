/**
 * Created by Vesdet on 02.05.2016.
 */
var randTwo = function () {
    var rand = Math.floor(Math.random() * 16);
    if (desk[rand] == 0) {
        elements[rand].classList.add('cell-2');
        desk[rand] = 2;
    } else randTwo();
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

var flag = false;
var refresh = function () {
    if (flag) {
        clearBooleanDesk();
        randTwo();
        flag = !flag;
    }
};