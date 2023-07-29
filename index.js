let homeScore = document.getElementById("home-pts")
let homeCount = 0
let guestScore = document.getElementById("guest-pts")
let guestCount = 0


function addToHome(points) {
    homeCount += points
    homeScore.innerText = homeCount
}

function addToGuest(points) {
    guestCount += points
    guestScore.innerText = guestCount
}

let newGameEl = document.getElementById("new-game")
    function newGame(){
        homeScore.textContent = 0
        guestScore.textContent = 0
        homeCount = 0
        guestCount = 0
        homePts.style.backgroundColor = "#000"
        guestPts.style.backgroundColor = "#000"
}

let endGameEl = document.getElementById("end-game")
    const homePts = document.getElementById("home-pts")
    const guestPts = document.getElementById("guest-pts")

function endGame(){
    if (homeCount > guestCount) {
        homePts.style.backgroundColor = "#06d6a0"
        guestPts.style.backgroundColor = "#000"
        homeScore.textContent = homeCount
    }
    else if (homeCount < guestCount){
        guestPts.style.backgroundColor = "#06d6a0"
        homePts.style.backgroundColor = "000"
        guestScore.textContent = guestCount
    }
}
endGame()
