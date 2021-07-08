let playerSelection;
let computerSelection;
let result;  
let playerScore = 0;
let computerScore = 0;

document.body.onload = createResultsElement;

document.getElementById('rock').onclick = play;
document.getElementById('paper').onclick = play;
document.getElementById('scissors').onclick = play;

function createResultsElement() {
    let resultsDiv = document.createElement('div');
    resultsDiv.setAttribute('class', 'results-container');
    
    let computerResultDiv = document.createElement('div');
    computerResultDiv.setAttribute('id', 'computer-result');
    
    let vsDiv = document.createElement('div');
    vsDiv.setAttribute('id', 'vs-div');
    
    let playerResultDiv = document.createElement('div');
    playerResultDiv.setAttribute('id', 'player-result');

    resultsDiv.appendChild(playerResultDiv);
    resultsDiv.appendChild(vsDiv);
    resultsDiv.appendChild(computerResultDiv);

    document.body.appendChild(resultsDiv);
}

function play(){
    computerSelection = computerPlay();
    playerSelection = this.id;
    console.log('User: ' + playerSelection);
    console.log('Computer: ' + computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(result);
    console.log('Player score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
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
        return result = 'Congratulations, you win!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return result = 'Unlucky, you lost this round!';
    } else {
        return result = "It's a draw!";
    }
}

// function game() {
//     // Write code to run 5 rounds of game and keep track of score
//     let playGame = true;
//     while (playGame) {
//         for (let i = 0; i < 5; i++) {
//             let validSelection = false;
//             while (!validSelection) {
//                 playerSelection = prompt('Round ' + (i + 1) + '\nMake your selection');
//                 // Convert player selection to correct format, first letter capitalised
//                 playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
                
//                 // Check if playerSelection is a valid input (Rock/Paper/Scissors only)
//                 if (playerSelection === 'Rock' ||
//                 playerSelection === 'Paper' ||
//                 playerSelection === 'Scissors') {
//                     validSelection = true;
//                 } else {
//                     validSelection = false;
//                     alert('Please choose a valid input');
//                 }
//             }

//             computerSelection = computerPlay(); // Determine computer selection

//             // Output result of round in alert
//             alert('Round ' + (i + 1) + ' \n' + 
//             `You chose ${playerSelection}` + '\n' +
//             `The computer chose ${computerSelection}` + '\n' +
//             playRound(playerSelection, computerSelection));
            
//             let scoreDisplay = `Your score is: ${playerScore} \nThe computers score is: ${computerScore}`;

//             if (i < 4) {
//                 alert(scoreDisplay);
//             } else if (i === 4) {
//                 if (playerScore > computerScore) {
//                     alert(scoreDisplay +
//                     '\nCongratulations, you win the game!');
//                 } else if (playerScore === computerScore) {
//                     alert(scoreDisplay +
//                     '\nYou drew this match!');
//                 } else {
//                     alert(scoreDisplay +
//                     '\nOoh, too bad. You lost this one!');
//                 }
//             }
//         }            

//         // Ask user if they would like to play again
//         let playAgainSelection = false;
//         while (!playAgainSelection) {
//             let playAgainAnswer = prompt('Would you like to play again?');
//             playAgainAnswer = playAgainAnswer.charAt(0).toUpperCase() + playAgainAnswer.slice(1).toLowerCase();

//             if (playAgainAnswer === 'Yes') {
//                 playerScore = 0;
//                 computerScore = 0; // Reset scores for new game
//                 playAgainSelection = true;
//                 playGame = true;
//             } else if (playAgainAnswer === 'No') {
//                 alert('Thanks for playing!');
//                 playAgainSelection = true;
//                 playGame = false;
//             } else {
//                 alert("Please enter 'Yes' or 'No'");
//             }
//         }
//     }
// }