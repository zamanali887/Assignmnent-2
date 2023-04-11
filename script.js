


// let orignalString= "<p>We Love Pakistan <br />we live in faisalabad <br />we love our homeland </p>";

// function lowerCase(){

//         let lowerCaseString = orignalString.toLowerCase() ;
//         document.getElementById("output").innerHTML= lowerCaseString;
// }
// function upperCase(){

//         let lowerCaseString = orignalString.toUpperCase() ;
//         document.getElementById("output").innerHTML= lowerCaseString;---
//     }
//     function capitalize(){
        
//         document.getElementById("output").innerHTML = '<span style="text-transform:capitalize;">'+ orignalString+'</span>';
//     }
    
//     function betterFormating(){
        
//         word = document.getElementById("input").value;
        
//         if(!word){
            
//             alert("please enter some words")
//             return;
//         }
//         let newText = word.toLowerCase();
//     document.getElementById("output").innerHTML = '<span style="text-transform:capitalize;">'+ newText----+'</span>';
// }




// input function

// function inputValue(){

//    return document.getElementById("input").value
// }

// //   round  a number

// function roundNumber(){

//    let num = Math.round(inputValue())

//    if(!num){

//     alert("please Enter some number")
//     return
//    }

//    document.getElementById("output").innerHTML = num;

// }
// //   ceil  a number

// function ceilNumber(){

//    let num = Math.random();

//    if(!num){

//     alert("please Enter some number")
//     return
//    }

//    document.getElementById("output").innerHTML = num;

// }
// //   floor  a number

// function floorNumber(){

//    let num = Math.floor(inputValue())

//    if(!num){

//     alert("please Enter some number")
//     return
//    }

//    document.getElementById("output").innerHTML = num;

// }
// //   get a random  a number

// function genrateRandomNumber(){

//    let num = Math.random()

//    if(!num){

//     alert("please Enter some number")
//     return
//    }

//    document.getElementById("output").innerHTML = num;

// }

// function throwDice(){

//     let num = Math.random();

//     let diceNum = ((num * 6) + 1);
    
//     let newNum = Math.floor(diceNum);

//     document.getElementById("output").innerHTML = "<h5>"+ newNum+"</h5>" + "<p> Generating a random number from 1 to 6</p>";
// }

// // generate a strong password

// function generatePassword(){
    
//     let value = inputValue()

//     if(!value){

//         alert ("Please Enter A Lenght of Password ")
//     }

//     let string = "";
//     let lowerCase = "abcdefghijklmnopqrstuvwxyz";
//     let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let allNum = "0123456789";
//     let spacialChar = "!@#$%^&`*,";

//     let password = lowerCase + upperCase + allNum + spacialChar;
//      for (i= 0; i < value ; i++ ){

//          let num = Math.random();
//          let  num2 = num * 72;
//         let num3 = charAt(num2)

//      }


// }



// Question No # 01 

// let num1 = +prompt("please enter any number");
// let num2 = +prompt("please enter any number");

// if(num1 > num2){
//       console.log(num1)
   
//    }
//    else{
//       console.log(num2)
//    }
 
   


// Question No # 02 

// let num = +prompt("please enter any number");
// // let num4 = +prompt("please enter any number");

// if(num > 0){
//    console.log("Output : The sign is +")

// }
// else{
//    console.log("Output : The sign is -")
// }




      
// Question No # 03 

// let num1 = +prompt("please enter any number");
// let num2 = +prompt("please enter any number");
// let num3 = +prompt("please enter any number");
// let num4 = +prompt("please enter any number");
// let num5 = +prompt("please enter any number");

// if(num1 > num2){
//       console.log(num1)
   
//    }
//    else if(num2 > num3){
//       console.log(num2)
//    }
   
//    else if(num3 > num4){
//       console.log(num3)
//    }
   
//    else if(num4 > num5){
//       console.log(num4)
//    }
   
//    else{
//       console.log(num5)
//    }
   




// Question No # 04

// for (let i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//      console.log(i + " is even");
//    } else {
//      console.log(i + " is odd");
//    }
//  }
 


 
// Question No # 05 

// let num = +prompt("please enter any number");


// if(num >= 90){

//       console.log("You Got A garde")
   
//    }
//    else if(num >= 80){

//       console.log("You Got B garde")
//    }
   
//    else if(num >= 70){

//       console.log("You Got C garde")
//    }
   
//    else if(num >= 60){

//       console.log("You Got D garde")
//    }
   
//    else{
//       console.log("You Got F garde")
//    }





// Question No# 06

// for (let i = 1; i <= 100; i++) {

//    if (i % 3 === 0 && i % 5 === 0) 
//    {
//      console.log("FizzBuzz");

//    } else if (i % 3 === 0) 
//    {
//      console.log("Fizz");

//    } else if (i % 5 === 0)
//    {
//      console.log("Buzz");
//    } 
//    else
//    {
//      console.log(i);
//    }
//  }
 




// Question No# 07
// for(let i = 0 ; i < 5; i++){

//    for(let n = 1 ; n < i ; n++){
      
//       output += "*"
//       console.log(output)
//    }
// }













// Assignment # 02

// Question No # 01

function addNumberClosure(number) {
   return function(n) {
     return n + number;
   }
 }
 
 const addFive = addNumberClosure(5);
const result = addFive(10);
console.log(result); // Output: 15


// Question No # 02

function searchArray(arr, value) {
   
   if (arr.length === 0) {
     return false;
   }
 
 
   if (arr[0] === value) {
     return true;
   }
 
   
   return searchArray(arr.slice(1), value);
 }

 

 const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3)); // Output: true
console.log(searchArray(arr, 6)); // Output: false


// Question No # 03

function addParagraph(text) {

   const newParagraph = document.createElement("p");
   
   newParagraph.textContent = text;
 
   const body = document.querySelector("body");
  
   body.appendChild(newParagraph);
 }

 
 text = addParagraph("This is a new paragraph!");

 console.log(text)



//  Question No # 04 

function addListItem(text) {
 
   const newListItem = document.createElement("li");
   
   newListItem.textContent = text;
  
   const list = document.querySelector("ul");
   
   list.appendChild(newListItem);
 }
 
 addListItem("New item");


//  Question No # 05

function changeBackgroundColor(element, color) {

   element.style.backgroundColor = color;
 }

 
 let myElement = document.getElementById("output");

changeBackgroundColor(myElement, "red"); // change the background color to red



// Qestion No # 06 

function saveToLocalStorage(key, objectValue) {
   
   const objectString = JSON.stringify(objectValue);
   
   localStorage.setItem(key, objectString);
 }
 const myFirstObject = { name: "John", age: 30 };
 saveToLocalStorage("myKey", myObject);

   // console.log()

 const objectString = localStorage.getItem("myKey");
 const mySecondObject = JSON.parse(objectString);
   

 // Qestion No # 07 
 
 
 
 function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
   return JSON.parse(item);
 }

 
 // Qestion No # 08 

 function saveAndRetrieveObjectFromLocalStorage(obj) {
  
   for (const key in obj) {
     localStorage.setItem(key, JSON.stringify(obj[key]));
   }
 
   
   const storedObj = {};
   for (const key in obj) {
     const storedValue = localStorage.getItem(key);
     storedObj[key] = JSON.parse(storedValue);
   }
 
   return storedObj;
 }
 