import * as encriptador from "./encriptador.js";
import * as desencriptador from "./desencriptador.js";

const btnCopy = document.getElementById("btn-copy"),
  form = document.getElementById("form"),
  alertContainer = document.querySelector(".alert"),
  fieldText = document.getElementById("fieldText");

const textContainer = document.querySelector(".text-encrypt-descrypt");
const asideContent = document.querySelector(".text-encrypt-descrypt-container");
let textEncrypted, textDescrypt;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const createParagraph = (text) => {
  textContainer.textContent = "";
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  textContainer.appendChild(paragraph);
};

const createAlert = (typeAlert, text) => {
  alertContainer.textContent = "";
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  alertContainer.appendChild(paragraph);
  alertContainer.classList.add(typeAlert);
  setTimeout(() => {
    alertContainer.classList.remove(typeAlert);
  }, 1800);
};

const fieldValidation = () => {
  const regexText = /[a-z]/;
  const data = new FormData(form);

  if (
    !regexText.test(data.get("fieldText")) &&
    data.get("fieldText").trim().length !== 0
  ) {
    createAlert("active-incorrect", "Solo letras minúsculas y sin acentos");
    throw TypeError("El campo esta vacio o contiene letras mayusculas");
  }
  if (!data.get("fieldText").trim()) {
    createAlert("active-incorrect", "Ingrese un texto");
    throw TypeError("El campo esta vacio o contiene letras mayusculas");
  }
};

document.addEventListener("click", (e) => {
  const data = new FormData(form);

  if (e.target.matches("#btn-encrypt")) {
    fieldValidation();

    // limpiar campo de texto
    fieldText.value = "";

    textEncrypted = encriptador.encrypted(data.get("fieldText"));
    btnCopy.classList.add("active");
    asideContent.classList.add("active");

    //   proyectando datos en pantalla
    createParagraph(textEncrypted);

    // alerta codificar
    createAlert("active-correct", "Texto Encriptado");
  }

  if (e.target.matches("#btn-descrypt")) {
    fieldValidation();

    // limpiar campo de texto
    fieldText.value = "";

    textDescrypt = desencriptador.descrypt(data.get("fieldText"));

    // Validar si recibe el los datos para formatiar la variable textDescrypt
    if (textDescrypt) {
      desencriptador.clearField();
    }

    // validacion si el retorno de la decodificacion es undefined o igual al texto ingresado.
    if (textDescrypt && textDescrypt !== data.get("fieldText")) {
      btnCopy.classList.add("active");
      asideContent.classList.add("active");

      // proyectando datos en pantalla
      createParagraph(textDescrypt);

      //   alerta decodificacion
      createAlert("active-correct", "Texto Desencriptado");
    }
  }

  if (e.target.matches("#btn-copy")) {
    const textParagraph = document.querySelector(
      ".text-encrypt-descrypt p"
    ).textContent;

    navigator.clipboard
      .writeText(textParagraph)
      .then(() => {
        //   alerta copy
        createAlert("active-correct", "Texto copiado");
      })
      .catch((e) => console.log(e));
  }
});
