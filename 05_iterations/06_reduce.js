const Arr = [1,2,3]
const init = 0
let NewArr = Arr.reduce((acc , current) => acc+current,init)

console.log(NewArr);
