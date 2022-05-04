const words = ["ai", "enter", "imes", "ober", "ufat"];
let newLetter, textDescrypt;

// cambia cada uno de las  letras a encrytar
const changeText = (textEncrypted, word, newLetter) => {
  const regex = new RegExp(word, "gm");

  // validar si el texto desencriptado contiene partes ya desencriptadas o estas vacio
  if (textDescrypt?.includes(word) || !textDescrypt) {
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

// reinicia el textDescrypt  al recibir(retornar) los datos
const clearField = () => {
  textDescrypt = "";
};

export { descrypt, clearField };
