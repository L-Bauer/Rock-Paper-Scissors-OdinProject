console.log('Hello World');

const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay () {
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
}

function playerSelection () {
    let playerChoice = prompt("Choose rock, paper, or scissors");
    return errorPlayerChoice(capitalizeFirstLetter(playerChoice));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function errorPlayerChoice(string) {
    if (string == choices[0] || string == choices[1] || string == choices[2]) {
        return string;
    }
    else {
        let errorMessage = "ERROR: That is not a choice. Please select rock, paper, or scissors."
        return errorMessage
    }
}

function play (playerSelection, computerPlay) {
    z
}

console.log(computerPlay());
console.log(playerSelection());