function makeNumber(string) {
    let number = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= '0' && string[i] <= '9') {
            number = number + string[i];
        }
    }
    return number;
}

function countNumbers(string) {
    let number = makeNumber(string);
    let numberCount ={};
    for (let j = 0; j <= 9; j++) {
        numberCount[j] = 0;
    }
    for ( let i = 0; i < number.length; i++) {
        for (let j in numberCount) {
            if (j === number[i]) {
                numberCount[j] += 1;
            }
        }
    }
    return numberCount;
}
countNumbers('jdjjka000466588kkkfs662555');
