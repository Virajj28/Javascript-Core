## 1 Hello, world !
  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>
<!-- Alert msg is pop-up -->
<hr>

## 1 Hello, world !
 2 Code Structure
    Introducing semicolon and comment tag in JS.

<hr>

## 3 The modern mode, "use strict"
<!-- The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way. -->
    <script>
      "use strict";
      alert( 'Hello, world!' );
    </script>
<hr>

## 4 Variables
Variables are used to store this information.<br>
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:
let message;

Now, we can put some data into it by using the assignment operator =:
let message;
message = 'Hello'; // store the string 'Hello' in the variable named message

The string is now saved into the memory area associated with the variable. We can access it using the variable name:
let message;
message = 'Hello!';
alert(message); // shows the variable content

To be concise, we can combine the variable declaration and assignment into a single line:
let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!

<hr>

## 5  Data Types

  => 8 Data Types in JS

  ### BigInt

  A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

  ### String

  In JS, there are 3 types of quotes=>
  1.Double quotes: "Hello".
  2.Single quotes: 'Hello'.
  3.Backticks: `Hello`.

  eg. let str = "Hello";
  let str2 = 'Single quotes are ok too';
  let phrase = `can embed another ${str}`;

  ### Boolean (logical type)

  The boolean type has only two values: true and false.

This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

### The "null" value

  The special null value does not belong to any of the types described above.

  It forms a separate type of its own which contains only the null value:

  =>> let age = null;
  In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

  It’s just a special value which represents “nothing”, “empty” or “value unknown”.

  The code above states that age is unknown.

### The "undefined value"

  The special value undefined also stands apart. It makes a type of its own, just like null.

  The meaning of undefined is “value is not assigned”.

  eg. let age;
      alert(age); // undefined

  ### Objects and Symbols

  The object type is special.
  eg. An empty object is created.
      let user = new Object();
       let user = {};

  The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

  ### The typeof operator
  The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

  eg. typeof "foo"
<hr>

## Interaction: alert, prompt, confirm

  ### alert shows a msg and waits for the user to press "OK"

  eg. alert( 'Hello, world!' );

  ### prompt accepts two arguments: 
  eg. result = prompt(title,[default]);

  ### confirm
  Syntax:
  result = confirm(question);

  Explanation: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
<hr>

## String Conversion

  Type Conversions: 
  Syntax: 
  let value = true;
  alert(typeof value); // boolean

  value = String(value); // now value is a string "true"
  alert(typeof value); // string

  ### String
  ### Number
  ### Boolean
<hr>

## Basic operators, maths

### Maths Operations are:
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.
### Remainder %

    eg. alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
        alert( 8 % 3 ); // 2, a remainder of 8 divided by 3
  ### Exponentiation **

    eg. alert( 2 ** 3 ); // 8, 2 to the power of 3
        alert( 2 ** 4 ); // 16, 2 to the power of 4   
  ### String concatenation with binary +
    eg. let s = "my" + "string";
        alert(s); // mystring
  ### Assigment =
    eg. let x = 5;
        x = x + 1;
        alert(x); // 6
  ### Chaining Assignment Operator
  eg. let a,b,c;
      a = b = c = 2;
      alert(a); // 2
      alert(b); // 2
      alert(c); // 2

      OR

      c = 2 + 2;
      b = c;
      a = c; 
  ### Increment/Decrement
  Look in mind about POSTFIX AND PREFIX.
  ### Bitwise operators
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )
<hr>

## Comparisons
  ### Boolean is the result
    True - means "yes", "correct", "true", "1"
    False - means "no", "incorrect", "false", "0"
  ### Typeof Operator
    == don't look for typeof
    eg. "1" == 1 
    => true

    === looks for typeof
    eg. "1" === 1
    => false
  ### Strange result: null vs 0
    eg. alert(null > 0); //false
        alert(null == 0); //false
        alert(null >= 0); //true
<hr>

## Conditional branching: if, '?'

### The “if” statement
  The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

  for eg. let year = prompt('In which yr was Ecma script created?');
          if(year == 2015) alert('You're right !');
### Several if Conditions: 
    else, else...if,

### Conditional operator '?'
    To eliminate if...else statements we can use the conditional operator. As, we need to assign a variable depending on a condition.

    Syntax: let result = condition ? value1 : value2;

  eg. let age = prompt('How old are you?');
      let message = (age < 18) ? 'Sorry, you are too young to use our service' : 'Welcome!';
      alert(message);

    ##### Assignment:
    let message;

    if (login == 'Employee') {
      message = 'Hello';
    } else if (login == 'Director') {
      message = 'Greetings';
    } else if (login == '') {
      message = 'No login';
    } else {
      message = '';
    }

    Solution: 
      let message = (login == 'Employee') ? 'Hello':
      (login == 'Director') ? 'Greetings' :
      (login == '') ? 'No Login'
       : '';
<hr>

## Logical Operators

  Four Logical Operators in JS || (OR), && (AND), ! (NOT), ?? (NULLISH)

### || (OR)
Represented with two vertical line symbols:
result = a || b;

OR finds the first truthy value
result = value1 || value2 || value3
### && (AND)
result = a && b;

AND finds the first falsy value
result = value1 && value2 && value3
### ! (NOT)
result = !value;
<hr>

## Nullish Coalescing Operator
The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

Eg. let firstName = null;
    let lastName = null;
    let nickName = "Supercoder";

    // shows the first defined value:
    alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
<hr>

## For, While Loops
For Loop:
The condition is evaluated and converted to a boolean by while 
Code: let i = 3;
      while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
        alert( i );
        i--;
      }

While Loop:
The loop will first execute the body, then check the condition, and, while it's truthy, execute it again and again.
Code:let i = 0;
    do {
      alert( i );
      i++;
    } while (i < 3);

For Loop:
Code:  for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
          alert(i);
        }
      
      	
begin =>	let i = 0  =>	Executes once upon entering the loop.
condition => i < 3  =>	Checked before every loop iteration. If false, the loop stops.
body  =>	alert(i)  =>	Runs again and again while the condition is truthy.
step  =>	i++  =>	Executes after the body on each iteration

<hr>

## The 'switch' statement
 The switch has one or more cases, and a default case.
 Code:
    let a = 2 + 2;
    switch (a) {
      case 3:
        alert( 'Too small' );
        break;
      case 4:
        alert( 'Exactly!' );
        break;
      case 5:
        alert( 'Too big' );
        break;
      default:
        alert( "I don't know such values" );
    }

   <!-- Case 4 would get hit  -->
<hr>

## Functions
  Syntax: function name(parameter1, parameter2, ... parameterN) {
            ...body...
          }
  
  <!-- Study Deep on different types of variables fresh -->
<hr>

### Function Expressions
--Function is a value--
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


Callaback Functions:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
