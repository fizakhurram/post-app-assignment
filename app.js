var myDiv = document.getElementById('myDiv');
var nameInput = document.getElementById('name');
var lastnameInput = document.getElementById('lastname')
var email = document.getElementById('email');
var password = document.getElementById('password');
var postDetails = document.getElementById('post-det');

function submitForm() {
    if (nameInput.value && email.value && lastnameInput.value && password.value) {
        let userData = {
            firstName: nameInput.value,
            lastName: lastnameInput.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem("userData", JSON.stringify(userData));
        swal({
            title: "ACCOUNT SUCCESSFULLY CREATED!!",
            text: "something for post?",
            icon: "success",
            button: "Yes",
        }).then(() => {
            myDiv.style.display = "none";
            postDetails.style.display = "block";
        });
    } else {
        swal({
            title: "Oops",
            text: "Fill the required fields",
            icon: "warning",
            button: "Ok",
        })
    }
}
var postcard = document.getElementById('post-card');
var username = document.getElementById('user-name');
var title = document.getElementById('title');
var titleContainer = document.getElementById('titlecontainer');
var description = document.getElementById('description');
var descriptionContainer = document.getElementById('descriptioncontainer');
function postCard() {
    username.innerHTML = nameInput.value + " " + lastnameInput.value;
    titleContainer.innerHTML = title.value;
    descriptionContainer.innerHTML = description.value;
    postcard.style.display = "block";
    postDetails.style.display = "none"
}
function editpost() {
    username.innerHTML = nameInput.value + " " + lastnameInput.value;
    titleContainer.innerHTML = title.value;
    descriptionContainer.innerHTML = description.value;
    postcard.style.display = "none";
    postDetails.style.display = "block"
}
function deletepost() {
    postcard.remove();
    swal({
        title: "Post Deleted",
        text: "Leave the site?",
        icon: "error",
        button: "Ok",
    })
}
var loginDiv = document.getElementById('login-div');

function loginpage() {
    myDiv.style.display = "none";
    loginDiv.style.display = "block";
    loginDiv.innerHTML = `
             <img class="logo"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/floral-logo-design-template-58b4cfe80bb61b19148e1e7f71c8ec67_screen.jpg?ts=1663518788"
            alt=""> <br>
        <h3>Login</h3>

        <label>Email:</label>
        <input id="login-email" type="email" required><br>

        <label>Password:</label>
        <input id="login-pass" type="password" required><br>

        <button class="login-btn" onclick="login()">Login</button>

        <p class="signup-link" onclick="showSignup()">Create a new Account</p>
     `

}
function login(){
    let savedUser =JSON.parse(localStorage.getItem("userData"));
     let loginEmail = document.getElementById("login-email").value;
     let loginPass = document.getElementById('login-pass').value;
     if(!savedUser){
        swal("No accounty Found!" , "please create a new Account First" , "error")
        return;
     }
     if (loginEmail === savedUser.email && loginPass === savedUser.password) {
        swal("Login Successful!", "Welcome back!", "success")
        .then(() => {
            loginDiv.style.display = "none";
            postDetails.style.display = "block"; 
        });

    } else {
        swal("Invalid Credentials", "Email or password is incorrect", "warning");
    }
}

function showSignup() {
    loginDiv.style.display = "none";
    myDiv.style.display = "block";
}








