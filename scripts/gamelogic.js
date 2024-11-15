

//creaing a score object
const score = 
{
    wins : 0 ,
    losses : 0 ,
    ties:  0 

    
}; 

//listening to the storage event to check for the saved score
window.addEventListener('storage' , updateScore());

// generating the computer move in a random manner 
function generateComputerMove(userMove)
{
    // using the random function or method to generate a random value. between 0 and 1

    const randomNumber = Math.random();
    //variable for the computer move 
    let computerMove = '';

    //checking the random value based on previous assumptions 

    if (randomNumber >= 0 && randomNumber < 1 / 3)
{
    computerMove = "Rock";
}
else if (randomNumber >=1/3 && randomNumber < 2 / 3)
{
    computerMove = "Paper";
}
else if (randomNumber >= 2/3 && randomNumber < 1)
{
    computerMove = "Scissors";
}

// displaying both move 
//console.log(`user : ${userMove} --- Computer: ${computerMove}`);

//calling the compare move
compareChoices(userMove,computerMove);
}

//creating the comparsion method
function compareChoices(userChoice , computerChoice)
{
    //creating a variable to store the computer result
    let theResult ='' ; 

    //comparing the moves 

    if (userChoice === computerChoice)
{
    theResult= "Tie ^^ " ; 

}
else if (userChoice === "Rock" && computerChoice === "Paper")
{
    theResult = "You lose :( ";
}
else if (userChoice === "Rock" && computerChoice === "Scissors")
{
    theResult= " You Win !! ";
}
else if (userChoice === "Paper" && computerChoice === "Rock")
{
theResult = " You Win !!";
}
else if (userChoice === "Paper" && computerChoice === "Scissors")
{
    theResult = "You lose :( ";
}
else if (userChoice === "Scissors" && computerChoice === "Rock")
{
    theResult = "You lose :( ";
}
else if (userChoice === "Scissors" && computerChoice === "Paper")
{
    theResult = " You Win !!";
}

//updating the score object 
if (theResult === " You Win !!")
{
    score.wins += 1; 
}
else if (theResult === "You lose :( ")
{
    score.losses += 1;
}
else if (theResult === "Tie ^^ ")
{
    score.ties += 1 ; 
}
 //local storage to maintain the current score 
 //since local storage works with text data we need to serials the score object 
 localStorage.setItem('Score',JSON.stringify(score));

//calling the display result function 
displayResults(theResult,userChoice,computerChoice);

// console.log(`You picked : ${userChoice}. Computer picked ${computerChoice}. Result: ${theResult} 
//\n Wins ${score.wins} - Losses ${score.losses} - Ties ${score.ties}`);
}

//creating a counter reset function 
function resetCounters()
{
    score.wins = 0 ;
    score.losses = 0 ;
    score.ties = 0 ;

    //deleting the available score

    localStorage.removeItem("Score"); 
    //informing the user with the current score 
   displayResults();
    console.log(`Score has been reset. This is a fresh start. \n ins ${score.wins} - Losses ${score.losses} - Ties ${score.ties}`);
}

//Creating a score update function 
function updateScore(e){
    //creating the data from the localstorage and converting them back to java script object

    let newScore = JSON.parse(localStorage.getItem('Score'));

    //checking if the new score is  empty
    if (newScore === null)
{
    alert("there is no saved data..");
}
else 
{
    alert("Saved score available ..");
    score.wins = newScore.wins; 
    score.losses = newScore.losses ; 
    score.ties = newScore.ties ;
}
}
//creating a function to display output 

function displayResults(result = "new game",userStep = "No Moves", computerStep = "No Moves")
{
    //displaying the comparison result
//linking to paragraph
let theResultDisplay = document.querySelector(".jsResult");
let theMovesDisplay = document.querySelector(".jsMoves");
let theScoreDisplay = document.querySelector(".jsScore");

//populating the text inside the paragraph element 
theResultDisplay.innerHTML = result;
theMovesDisplay.innerHTML =     `you 
<img src="./images/${userStep}Final.png" class="moveIcon">
<img src="./images/${computerStep}Final.png"class="moveIcon">
Computer`;
theScoreDisplay.innerHTML = `Wins ${score.wins} - Losses ${score.losses} - Ties ${score.ties}`;


}
