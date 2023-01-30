// 4. Calculate the sum of numbers within an array
const prompt = require("prompt-sync")({sigint:true});

const arr = new Array();

let n = Number.parseInt(prompt("Enter n : "));

let user= 0;
for(let i = 0 ; i < n ; i++){

    user = Number.parseInt(prompt());
    arr[i] = user;

}

let add = 0;
for(let i = 0 ; i < n ; i++){
    add += arr[i];

}
console.log("Addition of the numbers in the array :",add);