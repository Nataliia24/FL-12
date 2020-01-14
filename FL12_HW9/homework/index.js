function convert() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            array.push(Number(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            array.push(String(arguments[i]));
        }
    }
    return array;
}


function executeforEach(array, func) {
    for (let el of array) {
        func(el);
    }
}


function mapArray(array, callback) {
    let newArray = [];
    executeforEach(array, function(el) {
        newArray.push(callback(Number(el)))
    });
    return newArray;
}


function filterArray(array, callback) {
    let boolArr = [];
    let newArr = [];
    executeforEach(array, function(el) {
        boolArr.push(callback(el))
    });
    for (let i = 0; i < boolArr.length; i++) {
        if (boolArr[i]) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}


function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(array) {
    let newArr = [];
    for (let i = array[0]; i <= array[1]; i++) {
        newArr.push(i);
    }
    return newArr;
}


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

function getArrayOfKeys(array, key) {
    let valArray = [];
    executeforEach(array, function(keyword) {
        valArray.push(keyword[key])
    })
    return valArray;
}
getArrayOfKeys(actors, 'name');

function substitute(arr) {
    let newArr = [];
    newArr = mapArray(arr, function(el) {
        const star = 30;
        if (el < star) {
            el = '*';
        }
        return el;
    });
    return newArr;
}

function getPastDay(date, day) {
    let pastDay = new Date(date);

    pastDay.setDate(date.getDate() - day)
    return pastDay.getDate();
}

function formatDate(date) {
    let yearDate = date.getFullYear();
    let monthDate = date.getMonth() + 1;
    let dayDate = date.getDate();
    let hoursDate = date.getHours();
    let minuteDate = date.getMinutes();
    return `${yearDate}/${monthDate}/${dayDate} ${hoursDate}:${minuteDate}`;
}
formatDate(new Date());