// 8. Remove the spaces found in a string
const prompt = require("prompt-sync")({sigint:true});


const spaceRemove =(str)=>{

    let newstr = '';
    for(let letter of str){
        if (letter == ' '){
            continue;

        }
        else{
            newstr +=letter;
        }

        
    }
    console.log(newstr)


}

let str = prompt("Enter String : ")

console.log()
console.log("All Spaces are removed in the string :-");
spaceRemove(str);