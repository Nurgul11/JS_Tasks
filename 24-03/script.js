//  1
const number = [1,2,5,6,88,5]
let sum = 0;
for(let i = 0; i < number.length; i++){
    sum += number[i];
}
console.log(sum);


//   2
const num = [1,2,8,9,4,7,3,11,15,20];
let sum2 = 0;
for(let i = 0; i < num.length; i++) {
    let sum1 = num[i] * num[i];
    sum2 =+ sum1
}
console.log(sum2);


//   3
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(let i = 0; i < arr.length; i++){
    if(i % 2 ==0){
        alert(i);
    }
}
