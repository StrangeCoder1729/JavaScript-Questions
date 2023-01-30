// 6. Sort an array from lowest to highest
const prompt = require("prompt-sync")({sigint:true});


const sorting = (arr)=>{

    let mini = 1000000;
    let temp = 0;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;

            }
        }
    }
    


}

let n = Number.parseInt(prompt("Enter n : "));

const arr = new Array();
let user = 0
for(let i = 0 ; i < n ; i++){
    user = Number.parseInt(prompt());
    arr[i] = user;
}

console.log();
console.log("Sorted Array from lowest to highest :-");
sorting(arr);
for(let i of arr){
    console.log(i);
}

