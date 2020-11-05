const template = document.querySelector("template");
const main = document.querySelector("main");

const createUser = user => {
    const localStorageUsers = localStorage.getItem("users");
    const users = JSON.parse(localStorageUsers)
    const usersNew = [
        ...users,
        user
    ];
    const stringUsersNew = JSON.stringify(usersNew)
    localStorage.setItem("users", stringUsersNew);
}

const loadLoginForm = () => {
    const fragment = template.content.cloneNode(true);
    const form = fragment.querySelector("form");
    const mainButton = form.querySelector(".main-action");
    const redirectButton = form.querySelector(".redirect-action");
    const formTitle = form.querySelector("h1");
    
    formTitle.textContent = "Login";
    mainButton.textContent = "Login";
    redirectButton.textContent = "Sign Up";

    mainButton.addEventListener("click", event => {
        event.preventDefault();
        const usernameInput = form.querySelector("input");
        const passwordInput = form.querySelector("password");
    
    redirectButton.addEventListener("click", event => {
        event.preventDefault();
        loadSignUpForm();
    })
    
    main.textContent = "";
    main.appendChild(form);
};

const loadSignUpForm = () => {
    const fragment = template.content.cloneNode(true);
    const form = fragment.querySelector("form");
    const mainButton = form.querySelector(".main-action");
    const redirectButton = form.querySelector(".redirect-action");
    const formTitle = form.querySelector("h1");
    
    formTitle.textContent = "Create Account";
    mainButton.textContent = "Create Account";
    redirectButton.textContent = "Login Form";

        createUser({ 
            username: usernameInput.value, 
            password: passwordInput.value
        });

        form.querySelector(".message").textContent = `User ${usernameInput.value} created!`;
        });

    mainButton.addEventListener("click", event => {
        event.preventDefault();
    })
    
    redirectButton.addEventListener("click", event => {
        event.preventDefault();
        loadLoginForm();
    })
    
    main.textContent = "";
    main.appendChild(form);
};

loadLoginForm()