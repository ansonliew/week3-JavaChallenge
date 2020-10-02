// //M1W3-CLASS3
// //(Q1) LARGEST LENGTH IN A SENTENCE
// function findLongestWord(str){
//   // Step 1. Split the string into an array of strings
//   var strSplit = str.split(" ");
//   // Step 2. Initiate a variable that will hold the length of the longest word
//   var longestWord = 0;
//   // Step 3. Create the FOR loop
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox run over the lazy dog"));

// console.log(findLongestWord("Welcome to Asia Developer Academy"));

// //(Q2)LARGEST ADJACENT PRODUCT
// function findLargestAdjProduct(arr){
//   var largestAdjProduct = arr[0] * arr[1]; //Can put 0 here as well
//   for(i = 0; i < arr.length-1; i++){
//     if ((arr[i] * arr[i+1]) > largestAdjProduct){
//       largestAdjProduct = arr[i] * arr[i+1];
//     }
//   }
//   return largestAdjProduct;
// }

// console.log(findLargestAdjProduct([3,6,-2,-5,7,3]));
