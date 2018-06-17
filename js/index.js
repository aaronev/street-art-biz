console.log('JS WORKS!')

var dom = {
  home: document.getElementById("home"),
  about: document.getElementById("about"),
  art: document.getElementById("art")
}

dom.home.addEventListener("click", () => {
  if (dom.about.style.display === "none") {
    dom.about.style.display = "block"
  } else {
    dom.about.style.display = "none"
  }
})