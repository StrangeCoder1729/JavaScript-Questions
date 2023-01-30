// 7. Create a function that filters out negative numbers
const prompt = require("prompt-sync")({sigint:true});


const creationArray =(arr,n)=>{

    let user = 0;
    for(let i = 0 ; i < n ; i++){
        user = Number.parseInt(prompt());
        arr[i] = user;

    }



}
const onlyPositive =(value)=>{


     
    return value > 0


}


const arr = new Array();
let n = Number.parseInt(prompt("Enter n : "));

creationArray(arr,n);
console.log();
console.log("Filtering the array :-");
console.log(arr.filter(onlyPositive));
 
