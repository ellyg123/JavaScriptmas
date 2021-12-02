const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    const now = new Date();
    const today = now.getDate();
    let daysRemaining = (christmas - today);
    
    countdownDisplay.innerHTML = daysRemaining;
}

renderCountdown();