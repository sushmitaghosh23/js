//object literals

const mysym = Symbol("key1")

const jsUser ={
    name: "Sushmita",
    [mysym]: "mykey1",
    age: 20,
    location: "CoochBehar",
    email: "sushmitaghoshofficial123@gmail.com",
    isLoggedIn: false,
    LastlofInDays:["Monday","Wednesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mysym])

jsUser.email= "sushmitaghosh464@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "sghosh123@gmail.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
    
}
jsUser.greetingtwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

