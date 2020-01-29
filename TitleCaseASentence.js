/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  let expRegular = /(\w|\')+/g;
  let newStr = "";
  let palabras = str.match(expRegular);
  for(let i = 0; i < palabras.length; i++){
    palabras[i] = palabras[i].toLowerCase()
    let caracter = String.fromCharCode(palabras[i].charCodeAt(0) - 32);
    let cadena = caracter + palabras[i].substring(1);
    palabras[i] = cadena;
    newStr = newStr.concat(palabras[i] + " ");
  }
  newStr = newStr.trim();
  return newStr;
}

titleCase("I'm a little tea pot");
