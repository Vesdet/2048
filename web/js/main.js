/**
 * Created by Vesdet on 29.04.2016.
 */
document.addEventListener("keydown", function (event) {
    if (event.which === 38) {   // top
        up();
    }
    if (event.which === 39) {   // right
        right();
    }
    if (event.which === 40) {   // bottom
        bottom();
    }
    if (event.which === 37) {   // left
        left();
    }
    refresh();
});

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
                flag = true;
                return;
            }
            if (desk[i + direction] == item && !booleanDesk[i]) {
                changeClass(i, i + direction, item, item * 2);
                flag = true;
                score += item * 2;
                booleanDesk[i + direction] = true;
                booleanDesk[i] = true;
            }
        }
    })
};

var moveVertical = function (count, direction) {
    desk.forEach(function (item, i, desk) {
        if (item == 0) return;
        if (Math.floor(i / 4) == count) {
            if (desk[i + direction] == 0) {
                changeClass(i, i + direction, item, item);
                flag = true;
                return;
            }
            if (desk[i + direction] == item && !booleanDesk[i]) {
                changeClass(i, i + direction, item, item * 2);
                flag = true;
                score += item * 2;
                booleanDesk[i + direction] = true;
                booleanDesk[i] = true;
            }
        }
    })
};