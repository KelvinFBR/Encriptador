import * as encriptador from "./encriptador.js";
import * as desencriptador from "./desencriptador.js";

// const fieldText = document.getElementById("fieldText");
const btnEncrypt = document.getElementById("btn-encrypt"),
  btnDescrypt = document.getElementById("btn-descrypt"),
  btnCopy = document.getElementById("btn-copy"),
  form = document.getElementById("form");
const textContainer = document.querySelector(".text-encrypt-descrypt");
const asideContent = document.querySelector(".text-encrypt-descrypt-container");
let textEncrypted, textDescrypt;
// console.log({ fieldText, form, btnEncrypt });

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
const fieldValidation = () => {
  const regexText = /[a-z]/;
  const data = new FormData(form);
  if (!regexText.test(data.get("fieldText")) || !data.get("fieldText").trim()) {
    throw TypeError("El campo esta vacio o contiene letras mayusculas");
    // alerta de datos no correctos
  }
};

document.addEventListener("click", (e) => {
  const data = new FormData(form);

  if (e.target.matches("#btn-encrypt")) {
    fieldValidation();
    textEncrypted = encriptador.encrypted(data.get("fieldText"));
    btnCopy.classList.add("active");
    asideContent.classList.add("active");

    //   proyectando datos en pantalla
    textContainer.textContent = "";
    let parrafo = document.createElement("p");
    parrafo.textContent = textEncrypted;
    textContainer.appendChild(parrafo);
    textDescrypt = "";

    // alerta ya fue codificado
  }

  if (e.target.matches("#btn-descrypt")) {
    fieldValidation();

    textDescrypt = desencriptador.descrypt(data.get("fieldText"));

    // validacion si el retorno de la decodificacion es undefined o igual al texto ingresado.
    if (textDescrypt && textDescrypt !== data.get("fieldText")) {
      btnCopy.classList.add("active");
      asideContent.classList.add("active");

      //   proyectando datos en pantalla
      textContainer.textContent = "";
      let parrafo = document.createElement("p");
      parrafo.textContent = textDescrypt;
      textContainer.appendChild(parrafo);
      textEncrypted = "";
    } else {
      // alerta ya fue decodificado
    }
  }

  if (e.target.matches("#btn-copy")) {
    console.log({ textEncrypted, textDescrypt });
    navigator.clipboard
      .writeText(textEncrypted || textDescrypt)
      .then(() => {
        console.log("texto copiado");
      })
      .catch((e) => console.log(e));
  }
});
