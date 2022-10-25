var newLevel = 1;
var progress = 2;
var point = 0;

function guess() {
    const random = Math.floor(Math.random() * progress) + 1;
    var msg1 = "Hello " + name + "!\n\nWelcome to level " + newLevel + ". Your point is " + point + " now!\n\nGuess a number from 1 to " + progress + " : ";
    var msg2 = "Ooops, try again " + name + "!\n\nYou're still in level " + newLevel + ". And your point is still " + point + ".\n\nGuess another number from 1 to " + progress + " : ";
    let number = parseInt(prompt(msg1));
    
    while(number !== random) {
        number = parseInt(prompt(msg2));
    }
    if (number == random) {
        newLevel++;
        progress++;
        point += 5;
        var result = prompt("Congratulations " + name + "!\n\nYou guessed the correct number and you received additional points. Your current point is " + point + ".\n\nDo you want to continue to the next level? Please type yes to continue!");
        if (result == "yes") {
        guess();
}
        else {
            alert("Thanks " + name + "! for playing number guessing game by Dr. Saffas!");
        }
    }
}

alert("You're welcome to number guessing game. Created by Dr. Saffas! Please press OK to start!");

var name = prompt("What's your name? ");

guess();