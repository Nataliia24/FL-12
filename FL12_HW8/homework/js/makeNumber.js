function makeNumber(string) {
    let number = '';
    for(let i = 0; i < string.length; i++) {
        if (string[i] >= '0' && string[i] <= '9') {
            number = number + string[i];
        }
    }
    return number;
}
makeNumber('123098h76gfdd');