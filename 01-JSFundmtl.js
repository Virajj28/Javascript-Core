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



// Error handling
setTimeout(function() {
    try {
      noSuchVariable; // try...catch handles the error!
    } catch {
      alert( "error is caught here!" );
    }
  }, 1000)


  // throwing our new Error
  let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

// rRethrowing with error instanceof
let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch (err) {

  if (err instanceof SyntaxError) {
    alert( "JSON Error: " + err.message );
  } else {
    throw err; // rethrow (*)
  }

}

// try,catch,finally
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}