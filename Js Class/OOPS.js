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

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'has logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'has a score of', this.score);
        return this;
    }
}  

var userOne = new User('geek@gmail.com', 'Geek');
var userTwo = new User('nervebody@yahoo.com','Nervebody');

userOne.login().updateScore().logout();
userTwo.login().updateScore().updateScore().logout();