function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let index = target.length * -1; 
  let ultimoTarget = str.slice(index);
  if(ultimoTarget == target) return true;
  else return false;
}

confirmEnding("Bastian", "n");