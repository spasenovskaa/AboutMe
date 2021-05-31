let nav = document = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-btn a");

let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.getElementsByClassName.opacity = "0";
    menuBtn.getElementsByClassName.pointerEvent = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvent = "none";
}
cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.getElementsByClassName.opacity = "1";
    menuBtn.getElementsByClassName.pointerEvent = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvent = "auto";
}
