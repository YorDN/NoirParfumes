const form = document.getElementById("form");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = []
    if(firstname_input){
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value); 
    }
});
function getSignupFormErrors(firsname, email, password, repeatPassword){
    let errors = []

    if(firsname === '' || firsname == null){
        errors.push('Първото Ви име е задължително!')
    }
}

