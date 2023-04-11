/**********№3 Получение по ключи name */

const form1 = document.getElementById('my-form');

const getForm1Values = (event) => {
    event.preventDefault();
    
    const name = form1.name;
    const lastname = form1.lastname;
    const login = form1.login;
    const date = form1.date;
    const adress = form1.adress;

    const values = {
        name:name.value,
        lastname:lastname.value,
        login:login.value,
        date:date.value,
        adress:adress.value
    }

    
    console.log(values);

}
form1.addEventListener('submit', getForm1Values);




/***********№ 6 Получаем через цикл for .... of****** */
const form = document.getElementById('my-form');

const getFormValues = (event) => {
    event.preventDefault();

    const values = {};
    for(let field of form){
        if(field.name){
            values[field.name] = field.value;
        }
    }
    
    console.log(values);
    
}
form.addEventListener('submit', getFormValues);  



