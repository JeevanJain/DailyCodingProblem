/**
 * @return {number}
 */
function rand7() {
    return Math.floor(Math.random() * 7) + 1;
}

function rand5() {
    while (true) {
        let num = rand7();
        if (num <= 5) {
            return num;
        }
    }
}


console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())