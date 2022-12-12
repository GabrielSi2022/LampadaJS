const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampCrash() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampCrash()) {
    lamp.src = "./Assets/lampadacesa.jpg";
  }
}

function lampOff() {
  if (!isLampCrash()) {
    lamp.src = "./Assets/lampadapagada.jpg";
  }
}

function lampCrash() {
  lamp.src = "./Assets/lampadquebrada.jpg";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampCrash);
