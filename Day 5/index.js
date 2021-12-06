const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

function writeGreeting() {
    let selectedGreeting = greetings[(Math.floor(Math.random()*greetings.length))];
    console.log(selectedGreeting);
    greetingDisplay.innerHTML = selectedGreeting;
    }
