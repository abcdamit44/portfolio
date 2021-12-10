var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var sticky = navbar.offsetTop;



window.onscroll = function() {
    // Sticky Navbar
    if (window.pageYOffset > 100) {
        navbar.classList.add("position-fixed");
        navbar.classList.add("top-0");
        navbar.classList.add("p-0");
        navbar.classList.add("w-100");
        navbar.classList.add("transparent");
        logo.classList.remove("d-none");
    } else {
        navbar.classList.remove("position-fixed");
        navbar.classList.remove("top-0");
        navbar.classList.remove("p-0");
        navbar.classList.remove("w-100");
        navbar.classList.remove("transparent");
        logo.classList.add("d-none");
    }

    // ParallelX Effect 
    var cover1 = document.querySelector('.coverSection');
    var cover2 = document.querySelector('.AboutSection');
    var cover3 = document.querySelector('.ProjectSection');
    var cover4 = document.querySelector('.ContactSection');
    var parallelx = window.pageYOffset;
    var parallelx2 = window.pageYOffset - cover2.offsetTop;
    var parallelx3 = window.pageYOffset - cover3.offsetTop;
    var parallelx4 = window.pageYOffset - cover4.offsetTop;
    cover1.style.backgroundPositionY = -parallelx * 0.5 + 'px';
    cover2.style.backgroundPositionY = -parallelx2 * 0.5 + 'px';
    cover3.style.backgroundPositionY = -parallelx3 * 0.5 + 'px';
    cover4.style.backgroundPositionY = -parallelx4 * 0.5 + 'px';
}