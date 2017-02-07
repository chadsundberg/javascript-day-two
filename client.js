// var zombieOne = 'Luke';
// var zombieTwo = 'Paul';
// var zombieThree = 'Fred';
//
// //
// //
// var zombieArray = ['Kris', zombieTwo, 'Catherine', 'Jeremy'];
// var zombieArrayTwo = ['rabbit', 'cow'];
//
// console.log(zombieArray[5]);
// zombieArray.push(zombieOne);
// zombieArray.push(zombieTwo);  //adds somthing to the back of the array
// zombieArray.push(zombieThree);
//
//
// zombieArray.unshift(zombieThree);  //adds something to beginning of array
// //
//
// var whoGotPopped = zombieArray.pop();  //removes something from end of array
// console.log(zombieArray);
//
// whoGotPopped = zombieArray.shift(); //removes the name on the front of the array
// console.log(zombieArray);
// console.log(zombieArray.length);
//
// for(var i = 0; i < zombieArray.length; i++) {
//   console.log(zombieArray[i]);
// }  // this runs 6 times since that is the length of the zombieArray, or Kris six times
// // now replacing 0 with i, it will run six times and log a list of names each on their own line.
// // console.log(whoIsAZombie(zombieArray));
// //
// zombieArray[2] = 'Steve';
// zombieArray[3] = 'Wilma';
// zombieArray[4] = 'Josh';
//
// console.log(zombieArray); // if there are undefined values in the array, it will still take up a spot in the array and will be included in array length when calling array.length
// for(var i = 0; i < zombieArray.length; i+=2) {
//   console.log(zombieArray[i]);
// }  // this logs out Kris, Catherine, and Luke

//for (var i = 0; i < array.length; i++) {
//   array[i]
// }  // can be accessed by typing "for"<tab>

// function whoIsAZombie(zombies) {
//   // console.log('zombies: ', zombies);
//   // console.log('zombies[0]: ', zombies[0]);
//   return zombies[0] + " and " + zombies[1];
// }


// var firstArray = [1, 2, 3, 4, 5];
// var secondArray = [6, 7, 8, 9, 10, 11, 12];
//
// function firstAndFourthSum(someArray) {
//   var sum = someArray[0] + someArray[3];
//   return sum;
// }
//
// console.log(firstAndFourthSum(firstArray));
// console.log(firstAndFourthSum(secondArray));


var ballOfString = "yarn";

var firstLetter = ballOfString[0];
firstLetter = ballOfString.charAt(0);

var stringLength = ballOfString.length;

var firstTwoLetters = ballOfString.substring(0, 2); // will return part of a string.
                                              // index of the letter you want, and the index of the string you don't want
var lastTwoLetters = ballOfString.substring(stringLength - 2, stringLength);
var middleTwoLetters = ballOfString.substring(stringLength - 3, stringLength - 1); // shows the middle two letters.
console.log(middleTwoLetters);  // .length - 1 is the last item in a string or array.

var commaSeparatedValues = "one,two,three,four";

var newArray = commaSeparatedValues.split('e');  // we have to use comma as the delimiter, meaning it breaks up the string into seperate array values.
console.log(newArray);        // the dilimiter does not show up in the console log output. It is case sensitive.
