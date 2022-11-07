let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let formBtn = document.querySelector('#login-btn');
let signupBtn = document.querySelector('#register-btn');
let loginForm = document.querySelector('.login-form-container');
let signupForm = document.querySelector('.signup-form-container');
let formClose = document.querySelector('#form-close');
let signUpClose = document.querySelector('#signup-close');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

signupBtn.addEventListener('click', () =>{
    signupForm.classList.add('active');
});

signUpClose.addEventListener('click', () =>{
    signupForm.classList.remove('active');
});

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});