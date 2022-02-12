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
<hr>

## Comparisons

  ### Boolean is the result
    True - means "yes", "correct", "true", "1"
    False - means "no", "incorrect", "false", "0"

  ### Typeof Operator
    == don't look for typeof
    eg. "1" == 1 
    => true

<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>

