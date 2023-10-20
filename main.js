const form = document.querySelector('.form')
const accountRegistration = document.querySelector('.accountRegistration')
const accountlogin =document.querySelector('.account-login')

accountRegistration.onclick = () => (
    form.classList.add('active')
);

accountlogin.onclick = () => (
    form.classList.remove('active')
);

// dark mode
let toggleBtn = document.querySelector("#toggleBtn");
let bodyEl = document.querySelector("body");
let darkMode = false;


toggleBtn.addEventListener('change', (event) => {
    darkMode = event.target.checked;
    if(darkMode){
        bodyEl.classList.add("dark") 
    }
    else
    {
        bodyEl.classList.remove("dark")
    }
});