# Objects: 

An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
Usually, the figure brackets {...} are used. That declaration is called an object literal.

Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// Delete
To remove a property, we can use the delete operator:
delete user.age;