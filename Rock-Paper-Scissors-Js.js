
//Inherit the last score
const lastScore = JSON.parse(localStorage.getItem("score"))

//Initialising the score
let score = lastScore || {wins:0, losses:0, draws:0};

//Displaying the initial scores on the page
const gameStats = document.querySelector('.displayGame');
const computerScore = document.querySelector('.displayComputerScore');
const playerScore = document.querySelector('.displayPlayerScore'); 
computerScore.innerHTML = `${score.losses}`;
playerScore.innerHTML = `${score.wins}`;


//The main function
function playGame (playerMove) {

//Code for the computer move here
function generateComputerMove () {

let computerMove = '';

let randomNumber = Math.random();



if (randomNumber >= 0 && randomNumber < 0.3) {
    computerMove = 'Rock';
}
else if (randomNumber >= 0.3 && randomNumber < 0.6) {
    computerMove = 'Paper';
}
else if (randomNumber >= 0.6 && randomNumber <= 1) {
    computerMove ='Scissors';
}

return computerMove;

};

// Generating the computer move here and saving it into a bigger scope to use in the compareMoves function
let computerMove = generateComputerMove(); 

//comparing the moves of both the player and the computer
function compareMoves () {
    let result = '';
     if (playerMove === 'Rock') {
         if (computerMove === 'Rock') {
             result = 'Tie'
         }
         else if (computerMove === 'Paper') {
             result = 'Computer Wins'
         }
         else if (computerMove === 'Scissors'){
             result = 'You Win'
         }
     }
 
     else if (playerMove === 'Paper') {
         if (computerMove === 'Rock') {
             result = 'You Win'
         }
         else if (computerMove === 'Paper') {
             result = 'Tie'
         }
         else if (computerMove === 'Scissors') {
             result = 'Computer Wins'
         }
     }
 
     else if (playerMove === 'Scissors') {
         if (computerMove === 'Rock') {
             result = 'Computer Wins'
         }
         else if (computerMove === 'Paper') {
             result = 'You Win'
         }
         else if (computerMove === 'Scissors') {
             result = 'Tie'
         }
 
        
     }
 
 
    updateScore();
     
     
 function updateScore () {
 
 if (result === 'Tie') {
     score.draws++;
 }
 
 else if (result === 'You Win') {
 score.wins++;
 }
 
 else if (result === 'Computer Wins') {
     score.losses++;
 }

 
 updatePageScore ();

 function updatePageScore () {
    const gameStats = document.querySelector('.displayGame');
    const computerScore = document.querySelector('.displayComputerScore');
    const playerScore = document.querySelector('.displayPlayerScore');
 
    gameStats.innerHTML = `You picked <img class="render-image" src="${playerMove}-image.png">, Bobnati picked <img class="render-image" src="${computerMove}-image.png">, Result is ${result}`;
    computerScore.innerHTML = `${score.losses}`;
    playerScore.innerHTML = `${score.wins}`;


 const stringScore =  JSON.stringify(score);

localStorage.setItem("score", stringScore);

if (score.wins - score.losses > 5) {
    const forHype = document.querySelector(".forHype")
    forHype.innerHTML = '<p> Easy on me o lol </p>'
}

else if (score.losses - score.wins > 5 && score.losses - score.wins < 10 ) {
    const forHype = document.querySelector(".forHype")
    forHype.innerHTML = '<p> Kicking your ass! </p>';
}

else if (score.losses - score.wins > 10) { 
    const forHype = document.querySelector(".forHype")
forHype.innerHTML = '<p> Wahala wahala wahala!!! Just let us restart the game </p>';
}

    

 }


 
 }
 
 }

 //calling the compare moves function
compareMoves();

}

//The autoPlay feature
function autoPlay () { 
    let randomNumber = Math.random();

    console.log(randomNumber);

function randomPlayerMove () {
if (randomNumber >= 0 && randomNumber < 0.3) {
    playerMove = 'Rock';
}

else if (randomNumber >= 0.3 && randomNumber < 0.6) {
    playerMove = 'Paper';
}

else if (randomNumber >= 0.6 && randomNumber <= 1) {
   playerMove ='Scissors';
} 
}

randomPlayerMove();

 const forClearInterval =  setInterval(function () {playGame(playerMove)}, 3000);
 console.log (typeof forClearInterval);
 return forClearInterval;
}

//Tutorial function
function displayTutorial () {
    const tutorial = document.querySelector('.tutorial');
    const hideTutorial = document.querySelector ('.hideTutorial');

    tutorial.innerHTML = ` <h3 class="tutorialText"> Paper Beats Rock </h3>
    <h3 class="tutorialText"> Scissors Beats Paper </h3>

    <h3 class= "tutorialText"> Rock Beats Scissors </h3>


    <p class= "tutorialText"> Select a move by clicking each of the Rock, Paper and Scissors Buttons.</p>
    
    <p class= "tutorialText"> I will also select a move. After which the winner will be decided. </p>

    <h4 class= "tutorialText"> Think you can beat me? We'll see! <h4>
   `

    hideTutorial.innerHTML = `<button class="hideTutorial"  onclick= "hideTutorial()" > Hide Tutorial </button>`
}
//To remove the tutorial for the page
function hideTutorial () {

 const tutorial = document.querySelector('.tutorial');
 const hideTutorial = document.querySelector ('.hideTutorial');

 tutorial.innerHTML = `<h2> Display tutorial </h2>`

    hideTutorial.innerHTML = ``

}
//reset the score
function resetScore () {
    score = {wins:0, draws:0, losses:0};
    const gameStats = document.querySelector('.displayGame');
    const computerScore = document.querySelector('.displayComputerScore');
    const playerScore = document.querySelector('.displayPlayerScore');
 
    gameStats.innerHTML = `You reset the score!`;
    computerScore.innerHTML = `${score.losses}`;
    playerScore.innerHTML = `${score.wins}`;
    
    (localStorage.setItem("score", JSON.stringify(score)));
  
}

function stopTheCount () {
   
    clearInterval(intervalClear);
}