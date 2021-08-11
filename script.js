let playerSelection;
let computerSelection;
let result;  
let round = 0;
let playerScore = 0;
let computerScore = 0;

document.body.onload = createElements;

function createElements() {
    // Create buttons container
    let buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');

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
    document.querySelector(".main").appendChild(buttons);
    document.querySelector(".main").appendChild(selectionDiv);
    // document.querySelector(".main").appendChild(scores);
}

function play(){
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