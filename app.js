console.log('Hello World');

const choices = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;
let key;

const button = document.querySelectorAll("button.choice");

button.forEach(button => button.addEventListener('click', playerPlay, {
    capture: false,
    once: true
  }));


function computerPlay () {
    const random = Math.floor(Math.random() * choices.length);
    return(choices[random]);
}

function playerPlay (e) {
    key = this.classList.value;
    console.log(this.classList.value);
    button.forEach(button => {button.removeEventListener('click', playerPlay);
        });
    console.log(e);
    //e.stopPropagation(); // stop bubbling!
    //console.log(this);   
}

function capitalizeFirstLetter(string) {
    string = string.trim();
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

function errorPlayerChoice(string) {
    if (string == choices[0] || string == choices[1] || string == choices[2]) {
        return true;
    }
    else {
        let errorMessage = "ERROR: That is not a choice. Please select rock, paper, or scissors.";
        alert(errorMessage);
        return false;
    }
}

function playRound (player, computer) {
    let winMessage;

    if (player == choices[0]) { //Player picks rock
        if (computer == choices[1]) {
            winMessage = 'You lose! Paper beats rock.';
        }
        else {
            winMessage = 'You win!!! Rock beats scissors';
        }
    }
    else if (player == choices[1]) { //Player picks paper
        if (computer == choices[0]) {
            winMessage = 'You win!!! Paper beats rock.';
        }
        else {
            winMessage = 'You lose! Scissors beats paper.';
        }
    }
    else if (player == choices[2]) { //Player picks scissors
        if (computer == choices[0]) {
            winMessage = 'You lose! Rock beats scissors.';
        }
        else {
            winMessage = 'You win!!! Scissors beats paper.';
        }
    }
    else {
        winMessage = 'Tie';
    }
    return(winMessage);
}

function game () {
    let gameResult;
    
    for (let i = 0; i < 5;) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        gameResult = playRound(playerSelection, computerSelection);
        if (gameRound(gameResult) == true) {
            console.log(gameResult);
           //console.log(computerSelection);
            i++;
        }
        else if (gameRound(gameResult) == false) {
            console.log(gameResult);
            //console.log(computerSelection);
        }
     } 
}


function gameRound (message) {
    if (message.includes('win') || message.includes('lose')) {
        return true;
    }
    else if (message.includes('Tie')) {
        return false;
    }
}

//game();