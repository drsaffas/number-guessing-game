var newLevel = 1;
var progress = 2;

function guessNumber(x, y) {
    const random = Math.floor(Math.random() * y) + 1;
    var msg = "Guess a number from 1 to " + y + " : ";
    let number = parseInt(prompt(msg));
    while(number !== random) {
        number = parseInt(prompt(msg));
    }
    if (number == random) {
        x++;
        y++;
        var result = prompt("Do you want to continue to the next level? Please type yes to continue!");
        if (result == "yes") {
        guessNumber(x, y);
}
        else {
            alert("Thanks for playing number guessing game by Dr. Saffas!");
        }
    }
}

alert("You're welcome to number guessing game. Written by Dr. Saffas! Please press OK to start!");
guessNumber(newLevel, progress);