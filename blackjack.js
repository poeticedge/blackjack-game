let playerEl = {
    name: "Megan",
    chips = 200
}
let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector (".cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips //rendering the object declared above

function getRandomCard (){//function declaration 
    let randomNumber = Math.floor( Math.random ()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber===1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sun = firstCard + secondCard
    renderGame( )
}

function renderGame() { // code to be executed  
    cardsEl.textContent = "Cards: "
    for (let i = 0; i = card < cards.length; i ++ 1) {
        cards.El.textContent += cards[i] + " " 
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
  }

function newCard (){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

