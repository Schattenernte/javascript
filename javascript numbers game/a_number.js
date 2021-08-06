
  // 10000 dollars if the number is known correctly
 // $5000 if the numbers have changed places
 // $1000 if a number is correct


 let producedNumber = (Math.random() * 90) + 10
 producedNumber = Math.floor(producedNumber) // I used math.floor() to get rid of the dotted number
console.log(`produced number: ${producedNumber}`);



let userNumber = parseInt(prompt("enter a number"))
console.log(`the number you entered: ${userNumber}`);


unitsDigit = producedNumber % 10   
tensDigit = Math.floor(producedNumber / 10)
console.log(`the ones digit of the generated number: ${unitsDigit} the tens digit of the generated number: ${tensDigit}`);
// I used this way to define the ones and tens digit of the generated number

userNumberUnitsDigit = userNumber % 10
userNumberTensDigit = Math.floor(userNumber / 10)
console.log(`the ones digit of the number you entered: ${userNumberUnitsDigit} the tens digit of the number you entered: ${userNumberTensDigit}`);
// I followed this way to define the number received from user



if (producedNumber == userNumber) {
    console.log("congratulations! you won 10000$");
}else if (unitsDigit == userNumberTensDigit && tensDigit == userNumberUnitsDigit) {
    console.log("congratulations! you won 5000$");
}else if (unitsDigit == userNumberUnitsDigit || tensDigit == userNumberTensDigit) {
    console.log("congratulations! you won 1000$");
}else{
    console.log("you didn't win anything");
}
