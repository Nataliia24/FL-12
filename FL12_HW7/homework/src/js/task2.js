let minNumber = 0;
let maxNumber = 8;
let attempts = 3;
let attempt = 4;
let maxPrize = 100;
let prize = 0;
let changePrize = 2;
let changeNumber = 4;
let won = true;

let play = confirm('Do you want to play a game?');
if (!play) {
    alert('You did not become a billionaire, but can');
} else {
    while (play) {
    while (won) {
        let random = Math.floor(Math.random() * (maxNumber + 1));
        let t = false;
        for (let i = 1; ; i++) {
            let userNumber = +prompt(`Choose a roulette pocket number from ${minNumber} to ${maxNumber}
            \nAttempts left: ${attempt-1}
            \nTotal price: ${prize}
            \nPossible prize on current attempt: ${Math.floor(maxPrize / Math.pow(changePrize, i-1))}`)
            if (userNumber === random) {
                prize += Math.floor(maxPrize / Math.pow(changePrize, i-1));
                break;
            } else {
                if (i === attempts) {
                    t = true;
                    break;
                }
            }
        }
        if (t) {
            break;
        }
        won = confirm(`Thank you for your participation. Your prize is: ${prize}. Do you want to continue?`);
        if (won) {
            maxNumber += changeNumber;
            maxPrize *= changePrize;
        } else {
            break;
        }
    }
    alert(`Thank you for your participation. Your prize is: ${prize}`);
    play = confirm('Do you want to play again?');
}
}
