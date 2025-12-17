var myDiv = document.getElementById('myDiv');
var nameInput = document.getElementById('name');
var lastnameInput = document.getElementById('lastname')
var email = document.getElementById('email');
var password = document.getElementById('password');
var postDetails = document.getElementById('post-det');

// working for local storage 
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Page load hone par localStorage se posts load karo
window.addEventListener("load", () => {
    let savedUser = JSON.parse(localStorage.getItem("userData"));

    if (savedUser) {
        // User already signed up
        myDiv.style.display = "none";
        loginDiv.style.display = "none";
        postDetails.style.display = "block";
        postcard.style.display = "block";
    } else {
        // No user, show signup
        myDiv.style.display = "block";
        loginDiv.style.display = "none";
        postDetails.style.display = "none";
        postcard.style.display = "none";
    }

    // Load posts
    let savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
        renderPost();
    }
});




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





var editingPost = null;

function renderPost() {
    let postsContainer = document.getElementById("posts-container")
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
        postsContainer.innerHTML += `
            <div class="intro">
                <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png">
                <h1 class="user-name">${post.user}</h1>
                <h2 class="title">${post.title}</h2>
                <p class="description">${post.description}</p>
                <button class="edit-btn" onclick="editPost(${index})">Edit</button>
                <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                <button class= "morepostbtn" onclick = "morePost()">More Post</button>
            </div>
        `;
    })
}
function deletePost(index) {
    posts.splice(index, 1);

    localStorage.setItem("posts", JSON.stringify(posts));

    renderPost();
    swal("Post Deleted", "Selectd Post Remove", "success");

}
var editingIndex = null;
function editPost(index) {
    title.value = posts[index].title;
    description.value = posts[index].description;

    editingIndex = index;

    postDetails.style.display = "block";
}

function postCard() {
    if (editingIndex !== null) {
        posts[editingIndex].title = title.value;
        posts[editingIndex].description = description.value;

        localStorage.setItem("posts", JSON.stringify(posts));
        renderPost();

        title.value = "";
        description.value = "";

        postDetails.style.display = "none";
        postcard.style.display = "block";

        editingIndex = null;

        swal("Post Updated!", "Your post has been updated.", "success");
    } else {
        let post = {
            user: `${nameInput.value} ${lastnameInput.value}`,
            title: title.value,
            description: description.value
        }
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        // render krega ye function sb posts ko
        renderPost();
        // ab form clear krdo
        title.value = ""
        description.value = ""
        postDetails.style.display = "none"
        postcard.style.display = "block"
    }
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





