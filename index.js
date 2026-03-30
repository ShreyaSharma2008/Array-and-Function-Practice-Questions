// Question 1
// Print Only Odd Numbers

const printOdd = function(arr){
    str = ""
    for(let i =0; i<arr.length;i++){
        if(arr[i] % 2 != 0)
        str += arr[i] + " "
    }
    console.log(str);
}
const arr = [1,2,3,4,5]
printOdd(arr);


// Question 2
// Count odd numbers

const countOdd = function(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 != 0)
        count++;
    }
    return count;
}
const arr1 = [3,6,9,10];
const result = countOdd(arr1)
console.log(result);


// Question 3
// Print array in reverse

const printReverse = (arr) =>{
    let str = ""
    for(let i=arr.length-1;i>=0;i--){
        str += arr[i] + " ";
    }
    console.log(str);
}

const arr2 = [10, 20, 30];
printReverse(arr2);


// Question 4
// Multiply each element by 5
const multiplyByFive = (arr) =>{
    let arr1 = [];
    for(let i = 0;i < arr.length;i++){
        arr1.push(arr[i]*5);
    }
    console.log(arr1);
}
const arr3 = [2, 4];
multiplyByFive(arr3);


//Question 5
// Find the smallest number
const findMin = (arr) => {
    let mini = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < mini){
            mini = arr[i];
        }
    }
    console.log(mini);
}
const arr4 = [8,3,6,1];
findMin(arr4);


// Question 6
// Print Positive Numbers

const printPositive = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>= 0)
        console.log(arr[i]);
    }
}
const arr5 = [-2,5,-1,7];
printPositive(arr5);


// Question 7
// Count numbers greater than 10
const countGreater = function(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>10)
        count++;
    }
    console.log(count);
}
const arr6 = [5,12,20,8];
countGreater(arr6);


// Question 8
// Convert to negative numbers
const makeNegative = function(arr){
    for(let i=0;i< arr.length;i++){
        if(arr[i]>0){
            arr[i]*=-1;
        }
    }
    console.log(arr);
}
const arr7 = [2,-4,5];
makeNegative(arr7);


// Question 9
// Print index with value

const printIndexValue = (arr) => {
    for(let i=0;i<arr.length;i++){
        console.log(`${i} : ${arr[i]}`);
    }
}
const arr8 = [10, 20];
printIndexValue(arr8);


// Question 10
// Sum of even numbers

const sumEven = function(arr){
    let sum = 0;
    for(let i=0;i < arr.length;i++){
        if(arr[i] % 2 == 0)
        sum += arr[i];
    }
    console.log(sum);
}
const arr9 = [1,2,4,5];
sumEven(arr9);


// Question 11
// Increment array values

const incrementArray = (arr) => {
    let newArr = []
    for(let i=0;i<arr.length;i++){
        newArr.push(++arr[i]);
    }
    console.log(newArr);
}
const arr10 = [4,7];
incrementArray(arr10);


// Question 12
// Check zero in array
const hasZero = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0)
        return true;
    }
    return false;
}
const arr11 = [3,0,5];
console.log(hasZero(arr11));