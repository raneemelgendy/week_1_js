console.log(" %celzero %cweb %cschool","color:red; font-size:40px","color: green; font-size:40px; font-weight:bold","background-color:blue;color:white;font-size:40px");

// -----------------------------

console.group("group 1");
console.log("message one");
console.log("message two");
console.group("child group");
console.log("message one");
console.log("message two");
console.group("grand child group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("message one");
console.log("message two");
console.groupEnd();

// -----------------------------



console.table(["raneem","nour","omar","hadeer"]);
// -----------------------------

/*console.log("Iam In Console");
document.write("Iam In Page");*/


// console.log("Iam In Console");
// document.write("Iam In Page");

// -----------------------------


// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
// Ouput
console.log(numberOne+""+ numberTwo); // Normal Concatenate => 1020
console.log(typeof 'numberOne+""+ numberTwo'); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
// -----------------------------
 console.log(elzero.innerHTML); // object
 console.log(typeof elzero); // object


// -----------------------------

let x = "I'm In";
let y = "love";
let z = "with";
let r = "javascript";

console.log("`"+ x + "\n" + '\\\\' +"\n"+ y + ' \\\\ ' + ' """ ' + " ''' " + "\n" + "++ " + z + " ++" + "\n"+
'\\'  + ' """ ' + '\\' + ' """ ' + "\n" + '""' + r +'""' + "``");
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

// -----------------------------

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

// -----------------------------

// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// -----------------------------


let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + true + true + true); // 6

// Soultion Three
console.log(num + num++ ); // 6

// Soultion Four
console.log(++num + true); // 6

// Solution Five
console.log(num+=true); // 6

// Solution Six
console.log(num); // 6

// -----------------------------

let Num = "10";

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(+Num + true*Num); // 20

// Solution Three
console.log(Num++ +  --Num ); // 20

// Solution Four
console.log(+Num* +Num/ +Num + +Num); // 20

// -----------------------------

let points = 10;

// Write Your Code Here

console.log(++points +true +true ); // 13

// Write Your Code Here

console.log(--points -true -true); // 8;

// -----------------------------

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(100000.0000); // 100000
console.log(1000000/10); // 100000
console.log(1000*100); // 100000
console.log(1_00_000); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10*10*10*10*10); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000")); // 100000

// -----------------------------
console.log(Number.MIN_SAFE_INTEGER*-1); // 9007199254740991

// -----------------------------

console.log(Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER
+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER
+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER
+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER
+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER
+Number.MAX_SAFE_INTEGER/Number.MAX_SAFE_INTEGER); // 16

// -----------------------------


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// -----------------------------

let _num = 10;

console.log(Number.isInteger(_num) + Number.isInteger(_num)); // 2

// -----------------------------

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed())); // 10
console.log(parseInt(flt)); // 10

// -----------------------------

console.log(Math.random()*4); // 0 || 1 || 2 || 3 || 4


// -----------------------------

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0 ,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(0).repeat(3).toLowerCase()); // eee

// -----------------------------

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True

// -----------------------------