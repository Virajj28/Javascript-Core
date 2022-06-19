// Functions associated in objects are called methods in classes.
var userOne = {
    email: 'geek@Viraj.com',
    name: 'Viraj',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();