// Functions associated in objects are called methods in classes.
// var userOne = {
//     email: 'geek@Viraj.com',
//     name: 'Viraj',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.login();
// userOne.logout();

// Updatiing Properties in Objects
// userOne.name = 'Yo';
// console.log(userOne.name);


//// Class constructors
// the 'new' keyword is used to create an object from a class.
// - creates a new empty object
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email, 'has logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'has logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'has a score of', this.score);
//         return this;
//     }
// }  

// class Admin extends Users {
//     deleteUser(){
//         users = users.filter(u => {
//             return u.email != user.email
//         })
//     }
// } 
// var users = [userOne, userTwo];

// admin.deleteUser(userTwo);

// console.log(users);

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}
var userOne = new User('geek@gmail.com', 'Geek');
var userTwo = new User('nervebody@yahoo.com','Nervebody');
// var admin = new Admin('lol@skype.com','Lol');

console.log(userOne);
userTwo.login();