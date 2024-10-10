function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("M");
    console.log("I");
}
//sayMyName -> reference
//sayMyName() -> Execution

// sayMyName()

function AddTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = AddTwoNumber(3,3)

// console.log("Result: ",result);

function login(username){   //username = "simi" we can define in paramater also.
    if(!username){
        console.log("please Enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(login());
// console.log(login("simi"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,2000));


// Function with object ->
const user = {
    username : "Sushmita",
    price : 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}
// handleobject(user)

// Function with Array ->

const MyArray = [200,300,3000]
function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(MyArray));


