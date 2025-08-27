// Enabled strict mode
"use strict";

// a function that converts a string to JSON
function parseToJSON(data) {
  //try to convert the data to JSON
  try {
    return JSON.parse(data); 
    //catching the error if it occurs
  }catch (err){
     //printing the error to the console
    console.error(err);
    //returning null if the error occurs
    return null;
  }
  
  
 
}
//test cases
let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

//console log the test cases
console.log(parseToJSON(failData)); //null  
console.log(parseToJSON(passData)); //{ success: true }

//notes:
//types of errors:
//syntax error
//reference error
//type error
