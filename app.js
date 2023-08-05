let screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    screen.value += e.target.dataset.num;
  });
});

equal.addEventListener("click", function () {
  const answer = eval(screen.value);
  screen.value = answer;
});

clear.addEventListener("click", function () {
  screen.value = "";
});
