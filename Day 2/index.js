christmasBtn.addEventListener('click', () => {
    body.classList.remove("snow");
    body.classList.add("christmas");
    greeting.textContent = "🎅 Merry Christmas!";
    })

snowBtn.addEventListener('click', () => {
    body.classList.remove("christmas");
    body.classList.add("snow");
    greeting.textContent = "☃️ Let it snowwww ☃️";
  })
