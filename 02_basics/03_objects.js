// Object literals 


const mySym = Symbol("key1")


const objUser = {
    name : "Amit Singh",
    "full name ": "AMit SIngh Bhati",
    [mySym ]: "myKey1",
    age: 21,
    location: "Delhi",
    email: "As8840677@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // console.log(name),
}
// console.log(objUser.name)
// console.log(objUser["email"])
// console.log(objUser["full name "]);
// console.log(objUser [mySym]);

// objUser.email = "Amit2004@gml.xom"
// Object.freeze(objUser)
// objUser.location = "jaipur"
// console.log(objUser);


 objUser.greeting = function(){
    console.log("hello amit singh");
 }
 
 

 objUser.greeting2 = function()
    {
    console.log(`Hello js user, ${this.name}`);
    
 }
console.log(objUser.greeting());
console.log(objUser.greeting2());
