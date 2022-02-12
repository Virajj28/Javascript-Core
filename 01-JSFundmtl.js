// console.log("Practice JS")

// Explaining useEffect Hook
ueEffect ( ()=> {
    fetch("https://..")
    .then((res)=> res.json)
    .then((data)=>{
        console.log(data);
    })
},[])


// Explaining Function Callback
function calculate(num1,num2, callbackFunc){
    return callbackFunc(num1,num2);
}

function calcSum (num1,num2){
    return num1 + num2;
}

console.log(calculate(2,3, calcSum));