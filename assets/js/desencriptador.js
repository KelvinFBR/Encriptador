import * as encriptador from "./encriptador.js";

const words = ["ai", "enter", "imes", "ober", "ufat"];
let newLetter,
  textArray,
  textDescrypt = "";
let flag = true;
// cambia cada uno de las  letras a encrytar
const changeText = (textEncrypted, word, newLetter) => {
  const regex = new RegExp(word, "gm");

  if (textEncrypted.includes(word) && flag) {
    textDescrypt = textEncrypted.replace(regex, newLetter);
    flag = false;
  } else if (textDescrypt.includes(word)) {
    textDescrypt = textEncrypted.replace(regex, newLetter);
    descrypt(textDescrypt);
  }

  return textDescrypt;
};

// encrypta el array y lo conviente en string
const descrypt = (text) => {
  try {
    words.map((word) => {
      if (word === "ai") {
        newLetter = "a";
      } else if (word === "enter") {
        newLetter = "e";
      } else if (word === "imes") {
        newLetter = "i";
      } else if (word === "ober") {
        newLetter = "o";
      } else if (word === "ufat") {
        newLetter = "u";
      }

      textDescrypt = changeText(text, word, newLetter);
    });
  } catch (err) {
    throw Error(err);
  }

  if (textDescrypt.trim().length === 0) {
    return;
  }

  return textDescrypt;
};

export { descrypt };
