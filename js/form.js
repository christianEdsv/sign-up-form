const submit = document.getElementById('submit');
const f_name = document.getElementById('first_name');
const l_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const validate = () =>{
    
    if (f_name.value === "") {
        alert("Please type your first name");
        return false
    }
    if (l_name.value === "") {
        alert("Please type your last name");
        return false
    }
    if (email.value === "" || !EmailValidation(email.value) ) {
        alert("Please type a valid email");
        return false
    }
    if (password.value === "") {
        alert("Please type your password");
        return false
    }

    show()

    return true;
}

const EmailValidation = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

const show = () =>{
    const message = `Enjoy the trial ${f_name.value} ${l_name.value}`;
    alert(message)
}

submit.addEventListener('click', validate)