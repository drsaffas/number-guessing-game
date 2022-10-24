var newLevel = 1;
var progress = 2;
var point = 0;

function guessNumber(x, y, z) {
    const random = Math.floor(Math.random() * y) + 1;
    var msg1 = "Hello " + name + "!\nWelcome to level " + x + "\nYour point is " + z + " Now!\nGuess a number from 1 to " + y + " : ";
    var msg2 = "Ooops, " + name + "try again!\nYou're still in level " + x + ".\nAnd your point is still " + z + ".\nGuess a number from 1 to " + y " : ";
    
    let number = parseInt(prompt(msg1));
    
    while(number !== random) {
        number = parseInt(prompt(msg2));
    }
    
    if (number == random) {
        x++;
        y++;
	z = z + 5;
        var result = prompt("Congratulations " + name + " You win!\n" + "\nYou also receive additional 5 points. Your point now is " + z + ".\nDo you want to continue to the next level? Please type yes to continue!");
	
        if (result == "yes") {
            guessNumber(x, y, z);
}
        else {
            alert("Thanks for playing number guessing game by Dr. Saffas!");
        }
    }
}

alert("You're welcome to number guessing game. Written by Dr. Saffas! Please press OK to start!");

var name = prompt("Please, enter your name first!")

guessNumber(newLevel, progress, point);
