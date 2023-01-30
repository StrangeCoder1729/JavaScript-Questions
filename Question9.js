// 9. Return a Boolean if a number is divisible by 10

const prompt = require("prompt-sync")({sigint:true});


const divisibleby10 =(num)=>{
    if(num % 10 == 0){
        return true;
    }else{
        return false;
    }


}

let num = Number.parseInt(prompt("Enter number : "));
let res = divisibleby10(num);
console.log()
console.log("Is",num,"divisible by 10 ?");
console.log(res)