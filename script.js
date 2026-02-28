let myLeads = []
const handOptions = ["rock","paper","scissors"];
const compEl = document.getElementById("compscore-el");
const playerEl = document.getElementById("playerscore-el");
const buttonEl = document.getElementById("button-el")
const resultsEl = document.getElementById("results-el")
let message = ""
let playerScore = 0
let computerScore = 0

let item1 = "rock";
let item2 = "scissors";
let item3 = "paper"

buttonEl.addEventListener("click", function() {
    let results = ""
    myLeads.push(playerEl.value)
    playerEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    myLeads = localStorage.getItem("myLeads")
    for(let i = 0; i < myLeads.length; i++) {
        results = `<li> ${myLeads} </li>`
    }

    resultsEl.innerHTML = results

})
function getWinner() {
if(item1 === "rock" && item2 === "scissors") {
    console.log("rock wins🤘") 
} else if(item1 === "rock" && item3 === "paper") {
    console.log("paper wins🧻")
} else if(item2 === item3) {
    console.log("scissors wins✂")
} else {
    console.log("not valid")
}
}


