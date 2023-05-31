const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login_link");
const registerlink = document.querySelector(".register-link");

registerlink.addEventListener("click", ()=> {
    wrapper.classList.add("active")
});

loginlink.addEventListener("click", ()=> {
    wrapperlink.classList.remove("active");
});