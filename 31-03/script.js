/* 1)Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду, 
   но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”, 
   после чего процесс завершится. При решении данной задачи нельзя вызывать setTimeout.
 */


   let counter = 0;
   const intervalId = setInterval(() => {
        console.log('Hello World');
        counter += 1;
        if (counter === 5) {
            console.log('Done');
            clearInterval(intervalId);
        }
   }, 1000);


/* 2) Выводим  2 следующих сообщения после соответствующих задержек.Сообщение “Hello after 4 seconds” выводим через 4 секунды.
Сообщение “Hello after 8 seconds” выводим через 8 секунд.
В решении нужно определить всего одну функцию, содержащую встроенные функции. Это означает, что множество вызовов setTimeout должны будут использовать одну и ту же функцию.
Пример вызова:
setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds  */  

const time = () => {
    console.log('Hello after 4 seconds');
    console.log('Hello after 8 seconds');
}
setTimeout(time, 4 * 1000 , 8 * 1000);

/*3) Пользователь вводит число от 1 до 31, которое присваивается переменной day. 
   Определите в какую декаду месяца попадает это число: в первую, вторую или третью. 
   Результат нужно вывести на экран.
   Используйте конструкцию swith-case. */

   let day = 23;
   switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            alert('Первую');
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:    
            alert('Вторую');
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
            alert('Третую');
            break;
   }

