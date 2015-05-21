Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");


function signup() {
    var username = document.getElementById('user').value;
    var pw = document.getElementById('password').value;
    var mail = document.getElementById('email').value;
    console.log("SIGN UP WITH");
    console.log(username);
    var person = new Parse.User();
    
    person.set("username", username);
    person.set("password",pw);
    person.set("email",mail);
    person.signUp(null, {success: function(user){
        console.log("Sign up Success");
    },
    error: function(user,error){
        console.log(error);
    }});
    
     event.preventDefault(); 
};
