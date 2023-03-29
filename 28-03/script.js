/* 1) На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.

   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] */

//    function start_double(){
//         double = start_double;
//         console.log(double);
//    }
//    start_double(1,4,6);
   const num1 = [3, 5,8]
   let double = function (num) {
    const number = [];
    for (let i = 0; i < num.length; i++) {
        number.push(num[i]*2);
    }
     return number;
}

console.log(double(num1));  // ["a",'a','a']



/*2) Напишите функцию, которая заполняет новый массив предоставленным значением 
   и затем ее возвращает. Функция должна первым параметром принимать 
   элемент (значение для массива), вторым параметром размер массива.  
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */
function newMas(size , value) {
   const newMas = [];
   for(let i = 0; i< size; i++){
      newMas.push(value);
   }
   return newMas;
}
console.log(newMas(3, "a"));


/*3) Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
   Попробуйте реализовать эту функцию не только с помощью if...else, но и с помощью тернарного оператора, и в виде стрелочной функции.*/

function showNum(x,y){
   if(x > y){
      return 1;
   } else if(x < y){
      return -1;
   } else{
      return 0;
   }
}
console.log(showNum(9,4));  // 1
console.log(showNum(3,5));  // -1
console.log(showNum(6,6));   // 0


// Тернарный
const shownum = function(a,b){
  return (a > b) ? 1 : (a < b) ? -1 : 0;
}
console.log(shownum(2,7));   // -1
console.log(shownum(4,2));   // 1
console.log(shownum(3,3));    // 0
