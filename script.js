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
