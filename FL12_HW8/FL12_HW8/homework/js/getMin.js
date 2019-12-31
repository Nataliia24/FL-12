function getMin(x) {
    let min = x;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

getMin(5, 6, -4, 20, -8);