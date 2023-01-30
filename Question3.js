// 3. Create a length converter function
/*
Convert Kilmoters to meters
*/

const prompt = require("prompt-sync")({sigint:true});


const kilotometer =(kilo)=>{

    return kilo * 1000;

}

let kilo = Number.parseInt(prompt("Enter Kilometers : "));

let m = kilotometer(kilo);
console.log("Meters",":",m);

