//  1

/* function cube_number(x){
    const result = x*x*x;
    console.log(result);
}

cube_number(5);
 */

//   2
         

function greet(who = 'гость') {
    console.log("Привет" + who);
  }
  greet();
  





// 3

/* function calculate_exam(i, j){
    // for(let i = 0; i < 100; i++)
        if(i > 90 || j > 10){
           return 100; 
        } else if(i >= 75 && j >=  5){
            return 90;
        } else if(i >= 50 && j >= 2){
            return 75;
        } else if(i >= 30 && j >= 1){
            return 50;
        } else{
            return 0;
        }   
    }
    
console.log(calculate_exam(100,0));
console.log(calculate_exam(90,4));
console.log(calculate_exam(75,4));
console.log(calculate_exam(40,3));
// console.log(0); */