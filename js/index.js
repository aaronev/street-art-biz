console.log('JS WORKS!')

var dom = {
  home: document.getElementById("home"),
  navArt: document.getElementById("nav-art"),
  navAtt: document.getElementById('nav-attire'),
  navShip: document.getElementById('nav-shipment'),
  navContact: document.getElementById("nav-contact"),
  about: document.getElementById("about"),
  art: document.getElementById("art"),
  attire: document.getElementById("attire"),
  ship: document.getElementById("ship"),
  contact: document.getElementById("contact")
}

dom.home.addEventListener("click", () => {
  if (dom.about.style.display === "block") {
    dom.about.style.display = "none"
  } else {
    dom.about.style.display = "block"
  }
  dom.art.style.display="none"
  dom.attire.style.display="none"
  dom.ship.style.display="none"
  dom.contact.style.display="none"
})

dom.navArt.addEventListener("click", () => {
  if (dom.art.style.display === "block") {
    dom.art.style.display = "none"
  } else {
    dom.art.style.display = "block"
  }
  dom.about.style.display="none"
  dom.attire.style.display="none"
  dom.ship.style.display="none"
  dom.contact.style.display="none"
})

dom.navAtt.addEventListener("click", () => {
  if (dom.attire.style.display === "block") {
    dom.attire.style.display = "none"
  } else {
    dom.attire.style.display = "block"
  }  
  dom.about.style.display="none"
  dom.art.style.display="none"
  dom.ship.style.display="none"
  dom.contact.style.display="none"
})

dom.navShip.addEventListener("click", () => {
  if (dom.ship.style.display === "block") {
    dom.ship.style.display = "none"
  } else {
    dom.ship.style.display = "block"
  } 
  dom.about.style.display="none"
  dom.art.style.display="none"
  dom.attire.style.display="none"
  dom.contact.style.display="none" 
})

dom.navContact.addEventListener("click", () => {
  if (dom.contact.style.display === "block") {
    dom.contact.style.display = "none"
  } else {
    dom.contact.style.display = "block"
  }  
  dom.about.style.display="none"
  dom.art.style.display="none"
  dom.attire.style.display="none"
  dom.ship.style.display="none"
})