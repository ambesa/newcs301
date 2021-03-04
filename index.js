" use strict";



/**
 * 
 * @param {n }   to be tested 
 * @return {boolean} result 
 */

function iseven(n) {

    return n % 2 === 0;

}

function printeven(n) {

    for (let i = 1; i <= n; i++) {
        if (iseven(i)) console.log(i);

    }

}
printeven(10)



// reading from ninja codes file
// 1- make  as short as posible as
//2 use single letter variable 
// 3- choose abstracte once in choosing names