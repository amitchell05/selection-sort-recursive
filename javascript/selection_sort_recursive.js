function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }

  let minValue = findMinValue(arr);
  let index = arr.indexOf(minValue);
  arr.splice(index, 1);

  let result = selectionSortRecursive(arr);
  result.unshift(minValue);
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
