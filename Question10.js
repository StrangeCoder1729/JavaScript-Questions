// 10. Return the number of vowels in a string
const prompt = require("prompt-sync")({sigint:true});


const numofvowels =(str)=>{

    let counter = 0
    for(let letter of str){
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter =='o' || letter == 'u'|| letter =='A'|| letter =='E'|| letter =='I'||letter=='O'||letter=='U'){
            counter +=1;
        }
    }
    return counter;



}

let str = prompt("Enter String : ");
let res = numofvowels(str);
console.log()
console.log("The number of vowels in the string is/are :-");
console.log(res);



