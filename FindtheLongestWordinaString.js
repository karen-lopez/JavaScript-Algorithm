function findLongestWordLength(str) {
  let longest = 0;
  let regExpresion = /\w+/g;
  let maches = str.match(regExpresion);
  maches.forEach(palabra => {
    if(palabra.length > longest) longest = palabra.length;
  })
  return longest;
}
