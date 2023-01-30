const prompt = require("prompt-sync")({sigint:true});

// 1. Print all even numbers from 0 – 10

let n = prompt("Enter n : ");

for(let i = 0 ; i < n ; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}