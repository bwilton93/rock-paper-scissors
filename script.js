let playerSelection;
let computerSelection;
let result;  
let round = 0;
let playerScore = 0;
let computerScore = 0;

document.body.onload = onStart();

function onStart() {
    createButtonsContainer();
    createButtons();
    createDisplays();
}

function createButtonsContainer() {
    let buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');

    document.querySelector(".main").appendChild(buttons);
}

function createButtons() {
    let buttons = document.querySelector('.buttons');

    // Create buttons
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    
    // Set button IDs
    rock.setAttribute('id', 'rock');
    paper.setAttribute('id', 'paper');
    scissors.setAttribute('id', 'scissors');
    
    // Set button display text
    rock.innerHTML = 'Rock';
    paper.innerHTML = 'Paper';
    scissors.innerHTML = 'Scissors';
    
    // Set up button click functions
    rock.onclick = play;
    paper.onclick = play;
    scissors.onclick = play;

    // Append buttons to container
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);
}


function createDisplays() {
    // Create selections div
    let selectionDiv = document.createElement('div');
    selectionDiv.setAttribute('class', 'selection-container');
    
    let selectionPara = document.createElement('p');
    selectionPara.innerHTML = "<span id='player-choice'></span>" +
                    " vs " + 
                    "<span id='computer-choice'></span>";
    selectionPara.setAttribute('id', 'selection-para');
    
    selectionDiv.appendChild(selectionPara);
    
    // Add elements to page
    document.querySelector(".main").appendChild(selectionDiv);
    // document.querySelector(".main").appendChild(scores);
}

function play() {
    round++;
    computerSelection = computerPlay();
    playerSelection = this.id;
    playRound(playerSelection, computerSelection);
    console.log('Round: ' + round +
            '\n' + result +
            '\nPlayer score: ' + playerScore +
            '\nComputer score: ' + computerScore + '\n');

    document.getElementById('player-choice').innerHTML = playerSelection;
    document.getElementById('computer-choice').innerHTML = computerSelection;

    // Create play again button after round 5
    if (round === 5) {
        clearButtons();

        let playAgain = document.createElement('button');
        playAgain.setAttribute('id', 'play-again-btn');
        playAgain.innerHTML = 'Play Again?';
        playAgain.onclick = newGame; 
        document.querySelector('.buttons').appendChild(playAgain);
    }
}

// Resets game state on "Play Again" button
function newGame() {
    round = 0;

    clearButtons();
    createButtons();

    document.getElementById('player-choice').innerHTML = '';
    document.getElementById('computer-choice').innerHTML = '';
}

// Clear button node
function clearButtons() {
    const buttonNode = document.querySelector('.buttons');
    while (buttonNode.firstChild) {
        buttonNode.removeChild(buttonNode.lastChild);
    }
}

function computerPlay() {
    let arr = ['rock', 'paper', 'scissors']; // Initalise array with possible moves
    computerSelection = arr[Math.floor(Math.random() * arr.length)]; // Choose a move from array at random
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        return result = 'Congratulations, you win this round!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return result = 'Unlucky, you lost this round!';
    } else {
        return result = "This round is a draw!";
    }
}