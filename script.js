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
    // Create buttons
    function makeButton(buttonName) {
        let button = document.createElement('button');
        button.className = 'btn-select';
        button.setAttribute('id', buttonName)     
        button.innerHTML = buttonName.charAt(0).toUpperCase() + buttonName.slice(1);
        button.addEventListener('click', play);

        return button;
    }

    // Identify button container
    let buttons = document.querySelector('.btns-container');

    // Append buttons to container
    buttons.appendChild(makeButton('rock'));
    buttons.appendChild(makeButton('paper'));
    buttons.appendChild(makeButton('scissors'));
}

function createDisplays() {
    // Create selections text divs using function
    function createSelectionsBox(name, text) {
        let result = document.createElement('div');
        result.className = 'flex-box';
        result.setAttribute('id', name);
        result.innerHTML = text;
        
        return result;
    }

    // Create score box display text
    function createScoreDivs(name, score) {
        let verticalDivs = document.createElement('div');
        verticalDivs.className = 'center-text';

        let upperDiv = document.createElement('div');
        let lowerDiv = document.createElement('div');

        upperDiv.setAttribute('id', `${name}-upper`);
        lowerDiv.setAttribute('id', `${name}-lower`);

        upperDiv.innerHTML = name.toUpperCase();
        lowerDiv.innerHTML = score;

        verticalDivs.appendChild(upperDiv);
        verticalDivs.appendChild(lowerDiv);

        return verticalDivs;
    }

    function scoreBoxInners(name) {
        let scoreContainer = document.createElement('div');
        scoreContainer.setAttribute('id', `${name}-score-container`);
        scoreContainer.className = 'flex-box';

        if (name === 'player') {
            scoreContainer.appendChild(createScoreDivs(name, playerScore));
        } else if (name === 'computer') {
            scoreContainer.appendChild(createScoreDivs(name, computerScore));
        } else {
            scoreContainer.innerHTML = ':';
        }

        return scoreContainer;
    }

    // Create selections div
    let selectionDiv = document.createElement('div');
    selectionDiv.className = 'selection-container';
    
    selectionDiv.appendChild(createSelectionsBox('player-choice', ''));
    selectionDiv.appendChild(createSelectionsBox('vs-box', 'Make your selection!'));
    selectionDiv.appendChild(createSelectionsBox('computer-choice', ''));

    // Create score box container
    let scoreBox = document.createElement('div');
    scoreBox.className = 'score-box';

    // Append score boxes to main score container
    scoreBox.appendChild(scoreBoxInners('player'));
    scoreBox.appendChild(scoreBoxInners('vs'));
    scoreBox.appendChild(scoreBoxInners('computer'));

    // Add elements to page
    document.querySelector(".main").appendChild(selectionDiv);
    document.querySelector(".main").prepend(scoreBox);
}

function play() {
    round++;
    computerSelection = computerPlay();
    playerSelection = this.id;
    playRound(playerSelection, computerSelection);
    
    document.getElementById('player-choice').innerHTML = playerSelection;
    document.getElementById('computer-choice').innerHTML = computerSelection;
    document.getElementById('vs-box').innerHTML = ' vs ';

    document.getElementById('player-lower').innerHTML = playerScore;
    document.getElementById('computer-lower').innerHTML = computerScore;

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
    playerScore = 0;
    computerScore = 0;

    clearButtons();
    createButtons();

    document.getElementById('player-choice').innerHTML = '';
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('vs-box').innerHTML = 'Make your selection!';
    document.getElementById('player-lower').innerHTML = playerScore;
    document.getElementById('computer-lower').innerHTML = computerScore;
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