// console.log("Practice JS")

function calc (num1,num2,callbackFunction){
    return callbackFunction(num1, num2);
}

function calcSum(num1,num2){
    return num1+num2;
}

console.log(calc (5,5,calcSum));