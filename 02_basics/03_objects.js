//singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sushmita"
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const obj1 = { 1: "a" , 2 : "b"}
const obj2 = { 3: "c" , 4 : "d"}
const obj3 = { 5: "e" , 6: "f"}
//also we can use object.assign
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);
