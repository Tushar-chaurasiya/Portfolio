document.addEventListener("DOMContentLoaded", function() {

    /*--------------Typed.js initialization---------------*/

    var options = {
        strings: ["Web Developer", "Designer", "Data Analysts"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed(".multiple-text", options);

    /*------------ScrollReveal initialization------------------*/

    ScrollReveal().reveal('.home-content', {
        duration: 1000, // Duration in milliseconds
        origin: 'bottom', // Animation start point
        distance: '50px' // Distance to move during animation
    });

    /*------------toggle menu icon and navbar-------------------*/

    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    /*-----------------scroll to section active link-----------------*/

    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        /*--------------stricky navbar-------------------*/    
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });
 
    /*-----------------remove toggle icon and navbar---------------*/

    document.querySelectorAll('header nav a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    /*-------------------scroll reveal---------------------*/

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
    
    function toggleReadMore(event) {
        event.preventDefault();
        var moreContent = document.getElementById("moreContent");
        var readMoreButton = document.getElementById("readMoreButton");

        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            readMoreButton.textContent = "Read less";
        } else {
            moreContent.style.display = "none";
            readMoreButton.textContent = "Read more";
        }
    }

    // Attach event listener for read more button
    var readMoreButton = document.getElementById("readMoreButton");
    if (readMoreButton) {
        readMoreButton.addEventListener('click', toggleReadMore);
    }

    // Smooth scrolling behavior when clicking on navbar links
    $(document).ready(function() {
        $('.navbar a').on('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();
    
                const hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    });
    
});