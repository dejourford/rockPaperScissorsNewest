// setting the score on scoreboard
let cpuScore = 0
document.querySelector('#cpuScore').textContent = cpuScore

let userScore = 0
document.querySelector('#userScore').textContent = userScore


let message = document.querySelector('#message')

// making event listeners for button presses
const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    cpuScore = 0
    document.querySelector('#cpuScore').textContent = cpuScore
    userScore = 0
    document.querySelector('#userScore').textContent = userScore
})


const rock = document.getElementById('rock')
rock.addEventListener('click', () => {
    
    userChoice = 'rock'
    findWinner()
    



})

const paper = document.getElementById('paper')
paper.addEventListener('click', () => {
    
    userChoice = 'paper'
    
    findWinner()
 
    

})

const scissors = document.getElementById('scissors')
scissors.addEventListener('click', () => {
    
    userChoice = 'scissors'
    
    findWinner()




})

function findWinner(){
    // get cpu choice
    let choices = ['rock', 'paper', 'scissors']
    let cpuChoice = choices[Math.floor(Math.random()*choices.length)];

    
    // define the win conditions for user
    if (userChoice == cpuChoice) {
        let message = document.querySelector('#message')
        let resultMessage = document.querySelector('#resultMessage')
        resultMessage.textContent = `You chose ${userChoice} and the computer chose ${cpuChoice}.`
        message.textContent = 'It\'s a draw!'
    }
    else if (userChoice == 'paper' && cpuChoice == 'rock'){
        userScore += 1
        document.querySelector('#userScore').textContent = userScore
        resultMessage.textContent = `You chose ${userChoice} and the computer chose ${cpuChoice}.`
        message.textContent = 'You Win!'
    }
    else if (userChoice == 'scissors' && cpuChoice == 'paper'){
        userScore += 1
        document.querySelector('#userScore').textContent = userScore    
        resultMessage.textContent = `You chose ${userChoice} and the computer chose ${cpuChoice}.`
        message.textContent = 'You Win!'
        }
    
    else if (userChoice == 'rock' && cpuChoice == 'scissors') {
        userScore += 1
        document.querySelector('#userScore').textContent = userScore
        resultMessage.textContent = `You chose ${userChoice} and the computer chose ${cpuChoice}.`
        message.textContent = 'You Win!'
    }

    // define win conditions for cpu 
    else if (cpuChoice == userChoice) {
        cpuScore += 1
        document.querySelector('#cpuScore').textContent = cpuScore
        resultMessage.textContent = `The computer chose ${cpuChoice} and you chose ${userChoice}.`
        message.textContent = 'The computer Wins!'
    }
    else if (cpuChoice == 'paper' && userChoice == 'rock'){
        cpuScore += 1
        document.querySelector('#cpuScore').textContent = cpuScore
        resultMessage.textContent = `The computer chose ${cpuChoice} and you chose ${userChoice}.`
        message.textContent = 'The Computer Wins!'
    }
    else if (cpuChoice == 'scissors' && userChoice == 'paper'){
        cpuScore += 1
        document.querySelector('#cpuScore').textContent = cpuScore    
        resultMessage.textContent = `The computer chose ${cpuChoice} and you chose ${userChoice}.`
        message.textContent = 'The computer Wins!'
        }
    
    else if (cpuChoice == 'rock' && userChoice == 'scissors') {
        cpuScore += 1
        document.querySelector('#cpuScore').textContent = cpuScore
        resultMessage.textContent = `The computer chose ${cpuChoice} and you chose ${userChoice}.`
        message.textContent = 'The Computer Wins!'
    }


}




