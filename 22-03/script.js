//   1

const x = 9;
if(x == 7){
    alert('Верно');
}else{
    alert('Неверно');    // неверно
}



//    2

const a = 5;
const b = 8;             // b = 2
if(a <= 1 ||  b >= 3){
    alert(a + b);        // 13
}else{
    alert(a - b);        // 3
}


//  3

let price = prompt('Столица Кыпгызстана?');
if(price == "Бишкек"){
    alert('Верно');
}else{
    alert('Незнаете');
}

//   4

const time = 5;
if(time >= 0 && time <= 15){
    alert('Первую часть');        // Первую часть
}else if(time >= 15 && time <= 30){
    alert('Вторую часть');
}else if(time >= 30 && time <= 45){
    alert('Третью');
}else if(time >= 45 && time <= 60){
    alert('Четвертую');
}else{
    alert('Значение не попадает в даипозоне от 0 до 59');
}

