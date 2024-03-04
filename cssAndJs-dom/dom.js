function handleCostKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
/*
     function calculateTotal() {
       const inputElement = document.querySelector(".js-cost-input");
       let cost = Number(inputElement.value);
       let total = document.querySelector(".js-total-cost");
       if (cost < 0) {
         total.classList.add("new-js-total-cost");
         total.innerHTML = `Error: cost cannot be less than $0`;
       } else if (cost < 40) {
         cost += 10;
         total.innerHTML = `$${cost}`;
       } else if (cost >= 40) {
         total.innerHTML = `$${cost}`;
       }
     }
  */

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  document.querySelector(".js-total-cost").innerHTML = "";

  if (cost < 0) {
    document.querySelector(".js-total-cost").classList.add("new-js-total-cost");
    document.querySelector(
      ".new-js-total-cost"
    ).innerHTML = `Error: cost cannot be less than $0`;
    return;
  }

  if (cost < 40) {
    cost += 10;
  }
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerHTML = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}
