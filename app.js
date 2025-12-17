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
var postsContainer = document.getElementById("posts-container");



function deletepost(btn) {
    btn.parentElement.remove();
    swal("Post Deleted", "Only selected post removed", "success");
}


var editingPost = null;

function postCard() {
    postcard.style.display = "block";

    if (editingPost) {
        // UPDATE EXISTING POST
        editingPost.querySelector(".title").textContent = title.value;
        editingPost.querySelector(".description").textContent = description.value;

        swal("Post Updated!", "Your post has been updated.", "success");

        // Reset editing
        editingPost = null;
    } else {
        // CREATE NEW POST
        let postHTML = `
            <div class="intro">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png">
                <h1 class="user-name">${nameInput.value} ${lastnameInput.value}</h1>
                <h2 class="title">${title.value}</h2>
                <p class="description">${description.value}</p>
                <button class="edit-btn" onclick="editpost(this)">Edit</button>
                <button class="delete-btn" onclick="deletepost(this)">Delete</button>
                <button class="morepostbtn" onclick="morePost()">More Post</button>
            </div>
        `;
        postsContainer.innerHTML += postHTML;
        swal("Post Created!", "Your post has been added.", "success");
    }

    // Clear form
    title.value = "";
    description.value = "";
    postDetails.style.display = "none";
}

function editpost(btn) {
    let post = btn.parentElement;

    // Load form fields with selected post data
    title.value = post.querySelector(".title").textContent;
    description.value = post.querySelector(".description").textContent;

    // Set editingPost so postCard updates instead of creating new
    editingPost = post;

    // Show post form
    postDetails.style.display = "block";
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
function login() {
    let savedUser = JSON.parse(localStorage.getItem("userData"));
    let loginEmail = document.getElementById("login-email").value;
    let loginPass = document.getElementById('login-pass').value;
    if (!savedUser) {
        swal("No accounty Found!", "please create a new Account First", "error")
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

function morePost() {
    postDetails.style.display = "block"
    postcard.style.display = "none"

}





