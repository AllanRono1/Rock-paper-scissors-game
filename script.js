let myLeads = []
const handOptions = ["rock","paper","scissors"];
const compEl = document.getElementById("compscore-el");
const playerEl = document.getElementById("playerscore-el");
const buttonEl = document.getElementById("button-el")
const resultsEl = document.getElementById("results-el")
const localStorageItem = localStorage.getItem("myLeads")
const compResultsEl = document.getElementById("comp-results-el")

const compPicks = generateRandomPick()
console.log(compPicks)

let message = ""
let playerScore = 0
let computerScore = 0

let item1 = "rock";
let item2 = "scissors";
let item3 = "paper"

buttonEl.addEventListener("click", function() {
    myLeads.push(playerEl.value)
    playerEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads, resultsEl)
    render(compPicks, compResultsEl)
})


function render(leads, results) {
    let display = ""
    for(let i = 0; i < leads.length; i++) {
        display +=  `<li>${leads[i]}</li>`
    }
    results.innerHTML = display;
}

function generateRandomPick() {
    const randomPick = Math.floor(Math.random() * handOptions.length)
    return handOptions[randomPick]
}
