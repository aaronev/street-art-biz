console.log('JS WORKS!')

var dom = {
  home: document.getElementById("home"),
  navArt: document.getElementById("nav-art"),
  navAtt: document.getElementById('nav-attire'),
  about: document.getElementById("about"),
  art: document.getElementById("art"),
  attire: document.getElementById("attire")
}

dom.home.addEventListener("click", () => {
  if (dom.about.style.display === "block") {
    dom.about.style.display = "none"
  } else {
    dom.about.style.display = "block"
  }
})

dom.navArt.addEventListener("click", () => {
  if (dom.art.style.display === "block") {
    dom.art.style.display = "none"
  } else {
    dom.art.style.display = "block"
  }
})

dom.navAtt.addEventListener("click", () => {
  if (dom.attire.style.display === "block") {
    dom.attire.style.display = "none"
  } else {
    dom.attire.style.display = "block"
  }  
})
