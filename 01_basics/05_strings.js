const name = "Hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(name);
console.log(gameName.charAt(2));

console.log(gameName.indexOf('i'));


const newStringOne = "   Hitesh   "
console.log(newStringOne.trim());

const url = "https://amitsingh.com/amit%20bhati"

console.log(url.replace('%20', '-'));

console.log(url.split('-'));
console.log(gameName.split('-'));

// go through about string on mdn