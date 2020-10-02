// M1W3-CLASS3
// LARGEST LENGTH IN A SENTENCE
function findLongestWord(str){
  // Step 1. Split the string into an array of strings
  var strSplit = str.split(" ");
  // Step 2. Initiate a variable that will hold the length of the longest word
  var longestWord = 0;
  // Step 3. Create the FOR loop
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox run over the lazy dog"));

console.log(findLongestWord("Welcome to Asia Developer Academy"));
