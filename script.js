let myLeads = []
let compLeads = []
const handOptions = ["rock","paper","scissors"];
const compEl = document.getElementById("compscore-el");
const playerEl = document.getElementById("playerscore-el");
const buttonEl = document.getElementById("button-el")
const resultsEl = document.getElementById("results-el")
const compResultsEl = document.getElementById("comp-results-el")
const storedPlayer = JSON.parse(localStorage.getItem("myLeads"))
const storedComp = JSON.parse(localStorage.getItem("compLeads"))


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

    const compPicks = generateRandomPick()
    compLeads.push(compPicks)
    localStorage.setItem("compLeads", JSON.stringify(compLeads))
    
    if(storedPlayer) {
    render(myLeads, resultsEl)
    }

    if(storedComp) {
    render(compLeads, compResultsEl)
    }
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
    const item =  handOptions[randomPick]
    return item
}
