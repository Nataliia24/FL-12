function isLeapYear(value) {
    let date = new Date(value).getFullYear();
    if (isNaN(date)) {
        return 'Invalid date';
    } else if (date % 400 === 0 || date % 4 === 0 && date % 100 !== 0) {
        return date + ' is a leap year';
    } else {
        return date + ' is a not a leap year';
    }
}
isLeapYear('2020-01-01 00:00:00');
