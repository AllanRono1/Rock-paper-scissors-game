let myLeads = []
const handOptions = ["rock","paper","scissors"];
const compEl = document.getElementById("compscore-el");
const playerEl = document.getElementById("playerscore-el");
const buttonEl = document.getElementById("button-el")
const resultsEl = document.getElementById("results-el")
const localStorageItem = localStorage.getItem("myLeads")
console.log(localStorageItem)
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
    renderLeads()
})


function renderLeads() {
    let display = ""
    for(let i = 0; i < myLeads.length; i++) {
        display +=  `<li>${myLeads[i]}</li>`
    }
    resultsEl.innerHTML = display;
}