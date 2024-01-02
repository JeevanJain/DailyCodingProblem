function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}

function car(pair) {
    function getFirst(a, b) {
        return a;
    }
    return pair(getFirst);
}

function cdr(pair) {
    function getLast(a, b) {
        return b;
    }
    return pair(getLast);
}

// Example usage:
const myPair = cons(3, 4);
console.log(car(myPair));  // Output: 3
console.log(cdr(myPair));  // Output: 4