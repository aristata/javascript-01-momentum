const title = document.querySelector("#title");

const whiteText = "whiteText";
const redText = "redText";
const blackText = "blackText";

function changeColorToRed(element) {
  if (element.classList.contains(whiteText)) {
    element.classList.remove(whiteText);
  }
  if (element.classList.contains(blackText)) {
    element.classList.remove(blackText);
  }
  if (!element.classList.contains(redText)) {
    element.classList.add(redText);
  }
}

function changeColorToWhite(element) {
  if (element.classList.contains(redText)) {
    element.classList.remove(redText);
  }
  if (element.classList.contains(blackText)) {
    element.classList.remove(blackText);
  }
  if (!element.classList.contains(whiteText)) {
    element.classList.add(whiteText);
  }
}

function changeColorToBlack(element) {
  if (element.classList.contains(redText)) {
    element.classList.remove(redText);
  }
  if (element.classList.contains(whiteText)) {
    element.classList.remove(whiteText);
  }
  if (!element.classList.contains(blackText)) {
    element.classList.add(blackText);
  }
}

function windowSizeHandler() {
  // console.log(window.innerWidth);
  if (window.innerWidth <= 600) {
    document.body.style.backgroundColor = "tomato";
    changeColorToWhite(title);
  } else if (window.innerWidth > 600 && window.innerWidth <= 800) {
    document.body.style.backgroundColor = "lightsalmon";
    changeColorToBlack(title);
  } else if (window.innerWidth > 800 && window.innerWidth <= 1000) {
    document.body.style.backgroundColor = "lightblue";
    changeColorToBlack(title);
  } else {
    document.body.style.backgroundColor = "lightgreen";
    changeColorToRed(title);
  }
}

window.addEventListener("resize", windowSizeHandler);
