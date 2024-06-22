// Navbar toggle functionality
const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close = document.querySelector('#close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Image gallery functionality
var mainImg = document.getElementById("MainImg");
var smallimgs = document.querySelectorAll(".small-img");

smallimgs.forEach((smallimg, index) => {
    smallimg.addEventListener('click', () => {
        mainImg.src = smallimg.src;
    });
});
