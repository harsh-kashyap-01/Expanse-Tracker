

let login = false;

let loginPage = document.getElementById("login");
let signUp = document.getElementById("sign-up");
let options = document.getElementById("account-option");



function loginBut(){
    loginPage.style.display = "flex"
    signUp.style.display = "none"
    options.style.display = "none"
}
function signupBut(){
    signUp.style.display = "flex"
    loginPage.style.display = "none"
    options.style.display = "none"
}