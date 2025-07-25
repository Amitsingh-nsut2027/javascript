const accountId = 144553
let accountEmail = "as8840677@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2            not allowed 
accountEmail = "hc@hc.com"
accountpassword = "212121"
accountCity = "bengluru"

console.log(accountId);



/* 
    only use let insted of var 
    becsue of issue in block scope or functional scope
    
*/

console.table([accountId , accountEmail , accountPassword, accountCity])
