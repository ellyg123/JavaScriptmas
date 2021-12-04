const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

btn.addEventListener('click', fix);

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  console.log('Ya fixed it!');
  greeting.style.fontFamily = `'Codystar', cursive`;
  greeting.textContent = "🎄 Merry Christmas 🎄";
}
