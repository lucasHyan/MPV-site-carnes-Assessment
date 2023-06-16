"use strict";

// botão voltar ao topo
const botaoTopo = document.getElementById("myBtn");

botaoTopo.addEventListener("click", topFunction);

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

radioButtons.forEach((element) => {
  element.addEventListener("click", () => {
    const confereRadio = element.classList.contains("radio-marcado");

    if (confereRadio) {
      return;
    }

    radioButtons.forEach((outroRadio) => {
      outroRadio.classList.remove("radio-marcado");
    });

    element.classList.add("radio-marcado");
  });
});

//select
const selectOptions = document.querySelector(".options");
const selectBtn = document.querySelector(".select-btn");
let selectBtnSpan = document.querySelector(".select-btn span");
const selectOption = document.querySelectorAll(".option");
const arrowIcon = document.querySelector(".arrow-icon");

selectBtn.addEventListener("click", () => {
  selectOptions.classList.toggle("desativa");
  arrowIcon.classList.toggle("rotate");
});

selectOption.forEach((element) => {
  element.addEventListener("click", () => {
    selectBtnSpan.innerText = element.innerText;
    selectOptions.classList.toggle("desativa");
    arrowIcon.classList.toggle("rotate");
  });
});

//checkbox
const containerCheckbox = document.querySelector(".containerCheckbox");
const checkboxElemento = document.querySelectorAll(".checkbox");
const checkboxAmbos = document.querySelector(".checkbox-ambos");

checkboxElemento.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    elemento.classList.toggle("checkbox-marcado");

    const elemento1IsChecked =
      checkboxElemento[0].classList.contains("checkbox-marcado");
    const elemento2IsChecked =
      checkboxElemento[1].classList.contains("checkbox-marcado");

    if (
      (elemento1IsChecked && !elemento2IsChecked) ||
      (!elemento1IsChecked && elemento2IsChecked)
    ) {
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
    checkboxElemento.forEach((elemento) => {
      elemento.classList.add("checkbox-marcado");
    });
  } else {
    checkboxElemento.forEach((elemento) => {
      elemento.classList.remove("checkbox-marcado");
    });
  }
});

//form

const form = document.querySelector("form");
const nomeInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const telefoneInput = document.querySelector('input[name="telefone"]');
const mensagemInput = document.querySelector('textarea[name="message"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar nome
  const nomeTrim = nomeInput.value.trim();
  if (nomeTrim === "" || nomeTrim.split(" ").length < 2) {
    alert(`Nome não pode estar em branco e deve possuir pelo menos 2 nomes`);
    return;
  }

  // Validar email
  const email = emailInput.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("E-mail inválido");
    return;
  }

  // Validar telefone
  const telefone = telefoneInput.value.replace(/[\(\)\-\s]/g, "");
  if (telefone.length !== 11) {
    alert("Telefone inválido");
    return;
  }

  // Validar mensagem
  const mensagem = mensagemInput.value.trim();
  if (mensagem.length < 5) {
    alert("Por favor escreva uma mensagem com pelo menos 5 caracteres");
    return;
  }

  // Validar radio buttons
  const radioMarcadoBoolean = radioButtons.some((element) =>
    element.classList.contains("radio-marcado")
  );

  if (!radioMarcadoBoolean) {
    alert("Selecione uma preferência de carnes");
    return;
  }

  //validar select
  if (selectBtnSpan.innerText === "Selecione uma opção") {
    alert("Selecione uma opção de tipos de carnes");
    return;
  }

  //validar checkbox
  const checkboxComAmbos = document.querySelectorAll(
    ".checkbox, .checkbox-ambos"
  );

  const checkboxMarcadoBoolean = Array.from(checkboxComAmbos).some((element) =>
    element.classList.contains("checkbox-marcado")
  );

  if (!checkboxMarcadoBoolean) {
    alert("Selecione uma opção de contato");
    return;
  }

  // Se chegou aqui, o formulário está válido
  alert("Formulário enviado com sucesso!");
});
