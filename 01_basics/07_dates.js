// let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toString());

// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString());


let newDate = new Date()

console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday : "long"
})