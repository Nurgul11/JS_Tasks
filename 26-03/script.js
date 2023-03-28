//  1

function cube_number(x){
    const result = x*x*x;
    console.log(result);
}

cube_number(5);


//   2

function getName(){
    let name = 'Василий';
    if(name == 'Василий'){
        document.write('Привет, Василий');
    } else{
        document.write('Привет , гость')
    }
}
getName();         //  Привет Василий


// 3

function calculate_exam(i, j){
    for(let i = 0; i < 100; i++){
        if(i > 90 && j > 10){
           return 100; 
        } else if(i >75 && j > 5){
            return 90;
        } else if(i >50 && j > 2){
            return 75;
        } else if(i >30 && j > 1){
            return 50;
        } else{
            return 0;
        }   
    }
    
}
console.log(100);
console.log(90);
console.log(75);
console.log(50);
console.log(0);