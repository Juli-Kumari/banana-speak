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

// function clickHandler(){
//     // console.log("clicked!")
//     // console.log("input",txtInput.value) // read element   // taking input from console
//     outputDiv.innerText="ajsjsjsjsjs " + txtInput.value;

// };
// btnTranslate.addEventListener("click",clickHandler)

// var serveURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL= "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input 
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server : try again after some time ")
}

function clickHandler(){
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; // output
         })
     .catch(errorHandler)
    };
btnTranslate.addEventListener("click",clickHandler)

// function catch(callbackfn){
//     // something we can do
//     callbackfn(error)
// }




// const express = require('express');

// var cors = require('cors')
// var app = express()

// app.use(cors())

// app.get("/", (req, res) => {
//   res.send(" Go to translate")
// })

// app.get('/translate/yoda.json', (req, res) => {
//   console.log(req.query.text)
//   res.json({
//     "success": {
//         "total": 1
//     },
//     "contents": {
//         "translated": "Testing,  you are",
//         "text": req.query.text || "text missing",
//         "translation": "yoda"
//     }
// })
// });

// app.listen(3000, () => {
//   console.log('server started');
// });