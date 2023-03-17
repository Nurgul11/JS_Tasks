
// прмер &&
//    1) false && false = false
const person = {
    height: 1.88,
    weight: 50
}

let result = person.heigt >= 1.88 && person.weight > 50;
console.log(result);  


//    2) true && true = true
let lesson = {
    begin_less: 'at 8:00',
    duraction_less: "80min"
} 
let result1 = lesson.begin_less === "at 8:00" && lesson.duraction_less > "60min";
console.log(result1); // true
  
//   3) true && false = false
const subject = 'English';
const books = 10;
const check = books > 10 && subject === 'English'; //false
console.log(check);

//    4) false && true = false
const number = {
    a : 10,
    b : 39
}
console.log(number.a > 15 && number.b < 40); //false



//   пример ||

//1) false || true = true
const addres = {
    number: 25,
    street: 'Сон-кол'
}
const price = addres.number ==25 || addres.street === 'Манас';
console.log(price);            //true


//  2)true || false = true
const tel = {
    name: 'Apple 12pro',
    color: 'green'
}
const control = tel.name =='Apple 12pro' || tel.color === 'black';
console.log(control);              // true

//  3)true || true = true

const x = 27;
const y = 90;
console.log(x == 27 || y >70);          //true

//  4)false || false = false
let course = 'Fronted';
let time = '3 mounth';
let results = course === 'Java' || time == "2 mounth";
console.log(results);     // false



//   1)tasks
let num = 10;
num++;
num++;
num--;
console.log(num); //11

//     2)tasks
let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
console.log(num1);  //24


//    3)tasks
let num2 = 1;
num2 += 12;
num2 -= 14;
num2 *= 5;
num2 /= 7;
num2 += 1;
num2 -= 1;
console.log(num2);  //-0.7142857142857143



