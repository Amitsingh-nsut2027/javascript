// const tinderUser = new Object()
 const tinderUser = {}

 tinderUser.id = "11223se"
 tinderUser.name = "Sammy"
 tinderUser.isLoogedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "As8840677@gmail.com",

    fullName:  {
        userfullNmae: {
        firstName: "Amit",
        lastname: "singh",
        }
    }
}
 
// console.log(regularUser.fullName.userfullNmae.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);
   
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js course ",
    price : "5000",
    courseInstrustor: "Hites sir"
}

const {courseInstrustor: instructor} = course
// console.log(courseInstrustor);

// console.log(instructor);

// {
//     "name": "AMit singh",
//     "coursename": "js in English",
//     price: "free"

// }

