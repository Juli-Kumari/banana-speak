// console.log("script is working")
// var username=prompt("Give me username"); // take input from user
// // alert("this script works!" + username)  // it  shows buffering type things. 

// // process
// var welcomeMessage="This script work!" +username

// //output
// alert(welcomeMessage)

var btnTranslate=document.querySelector("#btn-translate");
// console.log(btnTranslate)
var txtInput=document.querySelector("#txt-input");
console.log(txtInput)
var outputDiv= document.querySelector("#output");
// console.log(outputDiv)
// outputDiv.innerText="juli kumari" // for write element

function clickHandler(){
    // console.log("clicked!")
    // console.log("input",txtInput.value) // read element   // taking input from console
    outputDiv.innerText="ajsjsjsjsjs "+textInput.value;

};
btnTranslate.addEventListener("click",clickHandler)

