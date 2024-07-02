/*------------------------toggle menu icon and navbar----------------------------*/

let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*----------------------------scroll to section active link---------------------*/

let navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


/*--------------------------stricky navbar----------------------------*/    
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});
 
/*--------------------------remove toggle icon and navbar-------------------*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/*-----------------------------scroll reveal-------------------------------*/
ScrollReveal().reveal('.home-content, .heading', {
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Function to toggle read more content
function toggleReadMore() {
    var moreContent = document.getElementById("moreContent");
    var readMoreButton = document.getElementById("readMoreButton");

    if (moreContent.style.display === "block") {
        moreContent.style.display = "none";
        readMoreButton.innerHTML = "Read less";
    } else {
        moreContent.style.display = "block";
        readMoreButton.innerHTML = "Read more";
    }
}

/*-----------------------------typed js-----------------------------------*/
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });