// function sayMyName(){
//     console.log("hii");

const res = require("express/lib/response");

    
// }

// sayMyName()

function addTwoNumbers(num1, num2){

        // console.log(num1 + num2);
        return num1+num2
}
const result = addTwoNumbers(3,4)

// console.log("result: " ,result);


function loginUserMessage (username){

    if (username === undefined) {
        console.log("please enter your usernmae");
        return
    }
    return `${username} just logged in` 
}

// loginUserMessage("Amit singh")
// console.log(loginUserMessage());



 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

