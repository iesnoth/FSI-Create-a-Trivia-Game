// Your Code Here
let userName = window.prompt('Please enter your name.')
let playAgain = true

function playGame() {
let userScore = 0
//loop to prompt each question and record score

for (let i = 0;i < questions.length; i++){
    let question= questions[i]
    let userAnswer= window.prompt(question.text)
    if (userAnswer === question.correctAnswer){
        userScore = userScore + 10
        console.log("Correct")
    }
    else if (userAnswer !== question.correctAnswer){
        console.log("Incorrect.")
    }
}

window.alert('Your score is: '+userScore)
}
//Asks if the player wants to play the game again. If not, terminates game.
while (playAgain === true){
    playGame()
    let userChoice = window.prompt ('Would you like to play again? Answer yes or no.')
    if (userChoice === 'yes'){
        playAgain = true
    } else {
        playAgain = false
        window.alert ('Thanks for playing the game!')
    }
}
