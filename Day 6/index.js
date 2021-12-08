const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  
    if (christmassifierBtn.textContent === "Christmassify") {
    greeting.classList.toggle("christmassified");
    christmassifierBtn.textContent = "De-christmassify";
  } else {
    christmassifierBtn.textContent = "Christmassify";
    greeting.classList.toggle("christmassified");
  }
}
