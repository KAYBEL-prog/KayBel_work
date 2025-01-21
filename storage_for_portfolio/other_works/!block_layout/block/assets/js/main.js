
let btnOpenAnswer = document.querySelectorAll('.drop-down-block');


btnOpenAnswer.forEach((btn,) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle("active");
  });
});


