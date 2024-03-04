function changeColor(choice) {
  const b = document.querySelector(choice);

  if (b.classList.contains("is-toggled")) {
    b.classList.remove("is-toggled");
  } else {
    turnOffPreviousButton();
    b.classList.add("is-toggled");
  }
}

function turnOffPreviousButton() {
  const c = document.querySelector(".is-toggled");
  if (c) {
    c.classList.remove("is-toggled");
  }
}
