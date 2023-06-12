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
const arrowIcon = document.querySelector(".arrow-icon");

selectBtn.addEventListener("click", () => {
  selectOptions.classList.toggle("desativa");
  arrowIcon.classList.toggle("rotate");
});

selectOption.forEach(option => {
  option.addEventListener("click", () => {
    selectBtnSpan.innerText = option.innerText;
    selectOptions.classList.toggle("desativa");
    arrowIcon.classList.toggle("rotate");
  });
});


//checkbox
const containerCheckbox = document.querySelector(".containerCheckbox");
const checkboxElemento = document.querySelectorAll(".checkbox");
const checkboxAmbos =  document.querySelector(".checkbox-ambos");

checkboxElemento.forEach(elemento => {
  elemento.addEventListener("click", () => {
    elemento.classList.toggle("checkbox-marcado");

    const elemento1IsChecked = checkboxElemento[0].classList.contains("checkbox-marcado");
    const elemento2IsChecked = checkboxElemento[1].classList.contains("checkbox-marcado");

    if (elemento1IsChecked && !elemento2IsChecked || !elemento1IsChecked && elemento2IsChecked) {
      checkboxAmbos.classList.add("checkbox-horizontal-marcado");
    } else if (elemento1IsChecked && elemento2IsChecked) { 
      checkboxAmbos.classList.remove("checkbox-horizontal-marcado");
      checkboxAmbos.classList.add("checkbox-marcado");
    } else {
      checkboxAmbos.classList.remove("checkbox-marcado");
      checkboxAmbos.classList.remove("checkbox-horizontal-marcado");
    }
  });
});

//checkbox all
checkboxAmbos.addEventListener("click", () => {
  checkboxAmbos.classList.toggle("checkbox-marcado");
  checkboxAmbos.classList.remove("checkbox-horizontal-marcado");

  if (checkboxAmbos.classList.contains("checkbox-marcado")) {
    checkboxElemento.forEach(elemento => {
      elemento.classList.add("checkbox-marcado");
    });
  } else {
    checkboxElemento.forEach(elemento => {
      elemento.classList.remove("checkbox-marcado");
    });
  }
});
