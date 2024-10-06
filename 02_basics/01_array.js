const myArr =[0,1,2,3,4,5]
const myHeros = ["Somu","puru"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

//slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(2,4)
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);