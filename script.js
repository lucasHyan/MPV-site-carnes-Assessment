// botão voltar ao topo
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
};
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// radio button

const radioButtons = Array.from(document.body.getElementsByClassName("radio"));

radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    const confereRadio = radio.classList.contains("radio-marcado");

    if (confereRadio) {
      return;
    }

    radioButtons.forEach((outroRadio) => {
      outroRadio.classList.remove("radio-marcado");
    });

    radio.classList.add("radio-marcado");
  });
});

//select
const selectOptions = document.querySelector(".options");
const selectBtn = document.querySelector(".select-btn");
const selectBtnSpan = document.querySelector(".select-btn span");
const selectOption = document.querySelectorAll(".option");


selectBtn.addEventListener("click", () => {  selectOptions.classList.toggle("desativa");
})


selectOption.forEach(option => {
  option.addEventListener("click", () => {
    selectBtnSpan.innerText = option.innerText;
    selectOptions.classList.toggle("desativa")
  });
});

