let homeScore = document.getElementById("home-pts")
let homeCount = 0
let guestScore = document.getElementById("guest-pts")
let guestCount = 0


function addHomeOnePt() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function addHomeTwoPts() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function addHomeThreePts() {
    homeCount += 3
    homeScore.innerText = homeCount
}

function addGuestOnePt() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function addGuestTwoPts() {
    guestCount += 2
    guestScore.innerText = guestCount
}

function addGuestThreePts() {
    guestCount += 3
    guestScore.innerText = guestCount
}
