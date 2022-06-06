console.log('Hello World');

const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay () {
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
}

function playerSelection () {
    var playerChoice = prompt("Choose rock, paper, or scissors");
    return playerChoice;
}

console.log(computerPlay());
console.log(playerSelection());