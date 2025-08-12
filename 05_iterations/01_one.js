


for (let index = 0; index <= 10; index++) {
    const element = index;
    
    if (element == 5) { 
        console.log("5 is best element");
        
        
    }
    console.log(element);
}

for (let index = 0; index < 11; index++) {
    console.log(`Outer lop ${index}`);
    
    for (let j = 0; j < 11; j++) {
        // console.log(`Inner value ${j} and outer ${index}`);
        console.log(index + '*' + j + ' = ' + index*j);
        
        
    }
    
} 

let array = ["Amit singh ", "Yash","aman","billu"]
for(let i = 0; i<array.length; i++){
       const element = array[i];
        console.log(element);
        
}

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detect 5`);
        break
        
    }
    console.log(`Value of i is ${index}`);
    
    
}


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detect 5`);
        continue
        
    }
    console.log(`Value of i is ${index}`);
    
     
}