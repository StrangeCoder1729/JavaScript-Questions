// 5. Create a function that reverses an array
const prompt = require("prompt-sync")({sigint:true});



const orginalarr =(arr)=>{

    for(let num of arr){
        console.log(num);
    }


}
const reversearr =(arr)=>{

    for(let i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i]);
    }



}

const arr = new Array();

let n = Number.parseInt(prompt("Enter n : "));
let user = 0;
for(let i = 0 ; i < n ; i++){
    user = Number.parseInt(prompt());
    arr[i] = user;
}

console.log();
console.log("Original Array :-");
orginalarr(arr);
console.log();
console.log("Reverse Array :-");
reversearr(arr);
