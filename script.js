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
    buttons.setAttribute('class', 'btns-container');

    document.querySelector(".main").appendChild(buttons);
}

function createButtons() {
    let buttons = document.querySelector('.btns-container');

    // Create buttons
    let rock = document.createElement('button');
    let paper = document.createElement('button');
    let scissors = document.createElement('button');
    
    // Set button IDs & Class
    rock.setAttribute('id', 'rock');
    rock.className = 'btn-select'

    paper.setAttribute('id', 'paper');
    paper.className = 'btn-select';

    scissors.setAttribute('id', 'scissors');
    scissors.className = 'btn-select';
    
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
    selectionDiv.className = 'selection-container';
    
    // Create selections text divs using function
    function createSelectionsBox(name, text) {
        let result = document.createElement('div');
        result.className = 'flex-box';
        result.setAttribute('id', name);
        result.innerHTML = text;
        return result;
    }

    selectionDiv.appendChild(createSelectionsBox('player-choice', ''));
    selectionDiv.appendChild(createSelectionsBox('vs-box', 'Make your selection!'));
    selectionDiv.appendChild(createSelectionsBox('computer-choice', ''));

    // Create score box container
    let scoreBox = document.createElement('div');
    scoreBox.className = 'score-box';

    // Create score cards
    let playerScoreContainer = document.createElement('div');
    playerScoreContainer.setAttribute('id', 'player-score-container');
    playerScoreContainer.className = 'flex-box';
    // let verticalFlex = document.createElement('div');
    // verticalFlex.className = 'vertical-flex';
    // playerScoreContainer.appendChild(verticalFlex);

    let scoreBoxSeperator = document.createElement('div');
    scoreBoxSeperator.setAttribute('id', 'score-box-seperator');
    scoreBoxSeperator.className = 'flex-box';
    // verticalFlex = document.createElement('div');
    // verticalFlex.className = 'vertical-flex';
    // scoreBoxSeperator.appendChild(verticalFlex);

    let computerScoreContainer = document.createElement('div');
    computerScoreContainer.setAttribute('id', 'computer-score-container');
    computerScoreContainer.className = 'flex-box';
    // verticalFlex = document.createElement('div');
    // verticalFlex.className = 'vertical-flex';
    // computerScoreContainer.appendChild(verticalFlex);

    scoreBox.appendChild(playerScoreContainer);
    scoreBox.appendChild(scoreBoxSeperator);
    scoreBox.appendChild(computerScoreContainer);

    // for (let i = 0; i < 2; i++) {
    //     let verticalFlex = document.createElement('div');
    //     verticalFlex.className = 'vertical-flex';
        
    // }
    
    // Add elements to page
    document.querySelector(".main").appendChild(selectionDiv);
    document.querySelector(".main").prepend(scoreBox);
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
    document.getElementById('vs-box').innerHTML = ' vs ';

    // Create play again button after round 5
    if (round === 5) {
        clearButtons();

        let playAgain = document.createElement('button');
        playAgain.setAttribute('id', 'play-again-btn');
        playAgain.innerHTML = 'Play Again?';
        playAgain.onclick = newGame; 
        document.querySelector('.btns-container').appendChild(playAgain);
    }
}

// Resets game state on "Play Again" button
function newGame() {
    round = 0;

    clearButtons();
    createButtons();

    document.getElementById('player-choice').innerHTML = '';
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('vs-box').innerHTML = 'Make your selection!';
}

// Clear button node
function clearButtons() {
    const buttonNode = document.querySelector('.btns-container');
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