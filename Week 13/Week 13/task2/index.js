let dateInput = document.getElementById("date");
let button = document.getElementById("container-button");
let result = document.getElementById("container-result");

function CountDateBirth(event) {
  event.preventDefault();

  let date = Date.now();
  let newDate = new Date();
  let birth = newDate.getTime();
  let resultCount = Math.round(birth - date / (1000 * 60 * 60 * 24));
  document.getElementById("container-result").textContent =
    resultCount.toFixed(2);
}
button.addEventListener("click", CountDateBirth);
