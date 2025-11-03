var myDiv = document.getElementById('myDiv');
var nameInput = document.getElementById('name');
var lastnameInput = document.getElementById('lastname')
var email = document.getElementById('email');
var password = document.getElementById('password');
var postDetails = document.getElementById('post-det');

function submitForm() {
    if (nameInput.value && email.value && lastnameInput.value && password.value) {
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
    username.innerHTML = nameInput.value + " " + lastnameInput.value ;
    titleContainer.innerHTML = title.value;
    descriptionContainer.innerHTML = description.value;
    postcard.style.display = "block";
    postDetails.style.display = "none"
}
function editpost(){
    username.innerHTML = nameInput.value + " " + lastnameInput.value ;
    titleContainer.innerHTML = title.value;
    descriptionContainer.innerHTML = description.value;
    postcard.style.display = "none";
    postDetails.style.display = "block"
}
function deletepost(){
    postcard.remove();
swal({
            title: "Post Deleted",
            text: "Leave the site?",
            icon: "error",
            button: "Ok",
        })
}


