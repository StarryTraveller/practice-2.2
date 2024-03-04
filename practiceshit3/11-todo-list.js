const myArray = [];

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  myArray.push(name);
  console.log(myArray);

  inputElement.value = "";
}
