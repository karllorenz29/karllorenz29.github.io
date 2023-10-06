const inputError = () => {
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email-address').value;
    let password = document.getElementById('password').value;

    const checker = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
    let checked = checker.test(email);

    if (name === "") {
        alert ("Please enter your name.")
    }else if (lastName === "") {
        alert ("Please enter your last name.")
    }else if (email === "") {
        alert ("Please enter your email address.")
    }else if (password === "") {
        alert ("Please enter your password.");
    }else if (checked === false) {
        alert ("Please enter a valid email address");
    }else {
        alert ("You just claimed your free 7 days trial.")
    }

}

document.querySelector('button').onclick = inputError;