function largestOfFour(arr) {
  // You can do this!
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let largest = -999999;
    for(let j = 0; j < arr[i].length; j++){
      
      if(arr[i][j] > largest) largest = arr[i][j]; 
    }
    newArr.push(largest);
  }
  return newArr;
}
