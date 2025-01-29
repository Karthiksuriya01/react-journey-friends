// In Javascript 
// 1. Arrays 
const arr = [1,2,3,4,5];
const arr1 = [...arr,6,7,8,9,10];
console.log(arr1[4]);

// 2. Objects

const obj = {
    name1:"jhon",
    roll : 123
}

const obj1 = {
    ...obj,
    name:"hello",
    roll_no : 132
}
console.log(obj1);
