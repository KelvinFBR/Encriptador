const letters = ["a", "e", "i", "o", "u"];
let newLetter, textencrypted, textArray;

// cambia cada uno de las  letras a encrytar
const changeText = (letter, newLetter) => {
  textArray.forEach((letterArray, index) => {
    if (letterArray === letter) {
      textArray[index] = newLetter;
    }
  });
  return textArray;
};

// encrypta el array y lo conviente en string
const encrypted = (text) => {
  try {
    //   covertir el texto en array
    textArray = Array.from(text);

    letters.map((letter) => {
      if (letter === "a") {
        newLetter = "ai";
      } else if (letter === "e") {
        newLetter = "enter";
      } else if (letter === "i") {
        newLetter = "imes";
      } else if (letter === "o") {
        newLetter = "ober";
      } else if (letter === "u") {
        newLetter = "ufat";
      }

      textencrypted = changeText(letter, newLetter);
    });
  } catch (err) {
    throw Error(err);
  }
  return textencrypted.toString().replace(/,/g, "");
};

export { encrypted };
