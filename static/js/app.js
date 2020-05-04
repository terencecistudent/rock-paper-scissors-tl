let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h4");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// Math.floor() to get whole number
// return choices as letters in array
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// converts letters to work if statement
function convertLetterToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    if (letter == "s") return "Scissors";
}

/*
    letter for user and computer will convert to word in function above
    function convertLetterToWord is not a string
    ${} around function here will convert letters to words
*/
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "computer".fontsize(2).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} beats 
                            ${convertLetterToWord(computerChoice)}${smallCompWord}. You win! <i class="far fa-thumbs-up"></i>`;
    userChoiceDiv.classList.add("green-glow");
    setTimeout(() => userChoiceDiv.classList.remove("green-glow"), 300);

    gameWinner();
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "computer".fontsize(2).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore.innerHTML = userScore;
    result_div.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} loses to 
                            ${convertLetterToWord(computerChoice)}${smallCompWord}. You lose! <i class="far fa-thumbs-down"></i>`;
    userChoiceDiv.classList.add("red-glow");
    setTimeout(() => userChoiceDiv.classList.remove("red-glow"), 300);

    gameWinner();
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "computer".fontsize(2).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    result_div.innerHTML = `${convertLetterToWord(userChoice)}${smallUserWord} equals 
                            ${convertLetterToWord(computerChoice)}${smallCompWord}. It's a draw! <i class="far fa-times-circle"></i>`;
    userChoiceDiv.classList.add("gray-glow");
    setTimeout(() => userChoiceDiv.classList.remove("gray-glow"), 300);
}

// Have to compare choices from user and computer
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        // user (r) will win if comp choice (s)
        // user (p) will win if comp choice (r)
        // user (s) will win if comp choice (p)
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // user (r) will lose if comp choice (p)
        // user (p) will win if comp choice (s)
        // user (s) will win if comp choice (r)
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        // if user and comp draw
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// main function
function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}
main();

// disable clicks once game is over
// function disableClick() {
//     rock_div.style.pointerEvents = 'none';
//     paper_div.style.pointerEvents = 'none';
//     scissors_div.style.pointerEvents = 'none';
// }

// Shows winner of game
function gameWinner() {
    if(userScore == 10) {
        result_div.innerHTML = "User wins the game!";
        // disableClick();
        reset();
    } else if(computerScore == 10) {
        result_div.innerHTML = "Computer wins the game!";
        // disableClick();
        reset();
    }
}

// Reset game
function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    console.log("Hello");
}
