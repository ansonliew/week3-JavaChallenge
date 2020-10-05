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


// //(Q3)TRANSFORM HOUR TO MILITARY FORMAT
// function transHrToMilitary(input){
//   var inputSplit = input.split(":");
//   var hoursStr = inputSplit[0];
//   var hoursInt = parseInt(hoursStr);
//   var minutesStr = inputSplit[1];
//   var secondsStr = inputSplit[2].substring(0,2);
//   var AmPmStr = inputSplit[2].substring(2);

// if ((hoursInt >= 0 && hoursInt <= 11) && AmPmStr == "AM"){
//   calculateTime = hoursInt + ":" + minutesStr + ":" + secondsStr;
// }
//   else if (hoursInt == 12 && AmPmStr == "AM") {
//     calculateTime = "00" + ":" + minutesStr + ":" + secondsStr;
//   }
//   else if ((hoursInt >= 0 && hoursInt <= 12) && AmPmStr == "PM") {
//     calculateTime = (hoursInt+12) + ":" + minutesStr + ":" + secondsStr;
//   }
//   else {
//     calculateTime = "Please re-enter the correct time and format!"
//   }
// return calculateTime
// }
// console.log(transHrToMilitary("11:05:45AM"))


// //Q3 answer provided by Wan
// function transformMilitary(timeString){
//   if (timeString.charAt(8) == "A"){
//     if (timeString.substring(0,2) == "12"){
//       return "00"+timeString.substring(2,8);
//     }
//     else {
//       return timeString.substring(0,8)
//     }
//   }
//   else {
//     if (timeString.substring(0,2) == "12") {
//       return timeString.substring(0,8)
//     }
//     else {
//       return (parseInt(timeString.substring(0,2))+12)+timeString.substring(2,8);
//     }
//   }
// }
// console.log(transformMilitary("10:05:45AM"))
// console.log(transformMilitary("09:05:45PM"))
