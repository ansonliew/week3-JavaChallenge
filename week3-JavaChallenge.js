// Week3 class1:
// Example1:
// var number = 12; //This is a global variable, I can call it everywhere including within the function.
// function copyNumber(num){
//   //This is a local variable, I can only access it within this {}
//   var alphabet = "abc";
//   console.log(num);
//   console.log(number);
// }
// copyNumber(6);
// console.log(alphabet);

// Example2:
// An onject is a data type that represent a "Real World" object in programming
// var stuDent = {
//   "name" : "Amy",
//   "studentId" : 12345,
//   "eMail" : "amy@bac.edu.my",
//   "pHone" : "012342678"
// }

// // I can access the value using [""] or dot notation
// console.log(stuDent["name"]);
// console.log(stuDent.studentId);
// console.log(stuDent.pHone);
// console.log(stuDent["name"], "" + stuDent.studentId);

// // Example3:
// function vowelCounter(sentence){
//   //Intialize the answer
//   var answer = 0;
//   for (var i = 0; i < sentence.length; i++) {
//     if (sentence.charAt(i) == 'a' || sentence.charAt(i) == 'e' || sentence.charAt(i) == 'i' || sentence.charAt(i) == 'o' || sentence.charAt(i) == 'u' || sentence.charAt(i) == 'A' || sentence.charAt(i) == 'E' || sentence.charAt(i) == 'I' || sentence.charAt(i) == 'O' || sentence.charAt(i) == 'U'){
//         answer++
//         }
//   }
//   return answer;
// }
// console.log(vowelCounter("Industry 4.0 Academy"));

// // Example4:
// //Array
// //It is used to store a collection of data
// //A set of data
// //Normally we add 's' when creating an array
// var scores = [80, 70, 86, 72, 68];

// //Retrieving the first item of an array - start with 0
// console.log(scores[0]);

// //How many items in an array? - Use .length
// console.log(scores.length);

// //Adding a new items at the end of an array - push
// scores.push(72);
// console.log(scores);

// //Removing an items from the end of an array - pop
// scores.pop();
// console.log(scores);

// for (var i = 0; i < scores.length; i++) {
//   console.log("Item "+i+" is " + scores[i]);
// }

// // Example5:
// //Create a function that will return min, max, avg
// function minMaxAvgs(arr){
// var min = arr[0];
// var max = arr[0];
// var avg;
// var sum = 0;
// // (1)Calculate Avg
// for (var i = 0; i < arr.length; i++){
// // For each round, add the numbers
//   sum += arr[i] 
// }
//   avg = sum / arr.length;
// // (2)Calculate Max
//   for (var i = 0; i < arr.length; i++){
//     if (arr[i]>max){
//       max = arr[i]
//     }
// // (3)Calculate Min
//     if (arr[i]<min){
//       min = arr[i]
//     }
//   }
//   return [min,max,avg]
// }
// console.log(minMaxAvgs([11,13,3,6,9,3,4,50]));

// // Example6:
// //String to test
// var myString = "Asia Developer Academy";
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.charAt(6));
// console.log(myString.indexOf('ev'));
// console.log(myString.lastIndexOf('e'));
// console.log(myString.substring(5,14));
// console.log(myString.split(" "))

// Example7:
// function upperCaseWord(sentence){
//   //(1)Initialize the answer
//   var answer = "";
//   //(2) Separate the sentence parameter with a white-space
//   var splitSentence = sentence.split(" ");
//   //(3) Increment loop execution counter
//     for (var i = 0; i < splitSentence.length; i++){
//       //(4) a) char no.0 in every splitSentence will be set to UpperCase + b) Remove the no.1 character in every splitSentence (Therefore it will replaced with the Uppercase character in 4(a))
//       answer += splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
//       //(5) If i is not equal to (splitSentence.length - 1) then the answer would add a white-space.
//       if (i != splitSentence.length - 1){
//         answer+= " ";
//       }
//     }
//       //(6) To input the answer into the var answer = "".
//       return answer;
//     }
//   console.log(upperCaseWord("my name is anson"));
  
// // Example8: number methods
// var myNumber = 10.23456789
// console.log(myNumber.toFixed(3))
// console.log(myNumber.toPrecision(3));
  
// var anotherNumber = 10.3
// console.log(Math.round(anotherNumber));
// console.log(Math.ceil(anotherNumber));
// console.log(Math.floor(anotherNumber));

// console.log(Math.random());

// // Example9: random int number 1-100
// var randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);

// // Example10:
// var students = ["Anson", "Matt", "Joshua", "Vin", "Shiva"];

// var randomNumber = Math.floor(Math.random()*students.length);
// console.log(students[randomNumber]+" will do the exercise")
