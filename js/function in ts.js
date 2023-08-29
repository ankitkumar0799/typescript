"use strict";
const add = (num1, num2, isShow) => {
    if (isShow === true) {
        console.log(num1 + num2);
    }
    else {
        return (num1 + num2);
    }
};
const rese1 = add(3, 5, true);
console.log(rese1);
