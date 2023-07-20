const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signUpBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getInput = icon.parentElement.querySelector("input");
        if (getInput.type === "password") {
            getInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
        else {
            getInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
})

// Function to open the modal with user data
function openModal(userData) {
    const modal = document.getElementById("userModal");
    const userDataElement = document.getElementById("userData");
    userDataElement.innerHTML = userData;
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("userModal");
    modal.style.display = "none";
}

function validate() {
    var user = document.getElementById("e").value;
    var pas = document.getElementById("pas").value;
    var user2 = document.getElementById("e");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    user2.style.borderBottom = "1px solid #7d2ae8";
    if (re.test(user)) {
        const userData = `<h4>Your Email: ${user}</h4>
        <p>Your Password: ${pas}</p>`;
        openModal(userData);
        home.classList.remove("show")
        return true;
    } else {
        user2.style.borderBottom = "3px solid red";
        return false;
    }
}


