// 2. Print a table containing multiplication tables

const prompt = require("prompt-sync")({sigint:true});



const multiplication =(num,n) =>{

    let mul = 0;
    for(let i = 1 ; i<=n ; i++){

        mul = num * i;
        console.log(num,"x",i,"=",mul);

    }

}


let num = Number.parseInt(prompt("Enter number : "));
let n = Number.parseInt(prompt("Enter the ending limit : "));

multiplication(num,n);

