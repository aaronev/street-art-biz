console.log('JS WORKS!')

var dom = {
  "home": document.getElementById("home"),
  about: document.getElementById("about"),

}

dom.home.addEventListener("click", () => {
  if (dom.about.style.display === "none") {
    console.log('hello')
    dom.about.style.display = "block"
  } else {
    dom.about.style.display = "none"
  }
})