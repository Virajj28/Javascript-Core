# 1 Hello, world !
  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>
<!-- Alert msg is pop-up -->
<hr>

# 2 Code Structure
    Introducing semicolon and comment tag in JS.

<hr>

# 3 The modern mode, "use strict"
<!-- The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way. -->
    <script>
      "use strict";
      alert( 'Hello, world!' );
    </script>
<hr>

# 4 Variables
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
