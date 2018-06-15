console.log('JS WORKS!')

document.getElementById("home").addEventListener("click", () => {
  var about = document.getElementById("about")
  if (about.style.display === "none") {
    about.style.display = "block"
  } else {
    about.style.display = "none"
  }
})