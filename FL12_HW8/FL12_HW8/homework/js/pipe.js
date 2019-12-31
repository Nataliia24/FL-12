function pipe(x) {
    let z = x;
    for (let i = 1; i < arguments.length; i++) {
        z = arguments[i](z);
    }
    return z;
}
pipe(4, Math.cos, Math.sin);