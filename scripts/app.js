// Path: scripts/app.js


// ***ON LOAD***
/* on load remove any hash and scroll to top */
window.onload = function() {
    removeHashFromURL();
    scollToTop();
};

/* remove hash from url */
function removeHashFromURL() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
                        uri.indexOf("#"));

        window.history.replaceState({},
                document.title, clean_uri);
    }
}


//cursor
var cursor = document.getElementById("cursor");
var littleCursor = document.getElementById("little-cursor");

/* scroll to top */
function scollToTop() {
    window.scrollTo(0, 0);
}

// prevent scroll
function preventScrolling(e) {
    e.preventDefault();
}


/* split name */
const enhanced = id => {
    const element = document.getElementById(id),
        text = element.innerHTML.split('');
    element.innerText = '';
    text.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'letter'
        span.innerText = letter;
        element.appendChild(span);
    })
}
enhanced('top-name');
enhanced('bottom-name');


//**** HEADER ****

// disable logo drag 
document.getElementById('logo').ondragstart = function() { return false; };


/* change cursor position */
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
    littleCursor.style.left = e.clientX + "px",
    littleCursor.style.top = e.clientY + "px";
});

/* change header on sroll */
const header = document.querySelector('#main-head');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100){
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.backdropFilter = 'blur(10px)'; 
    }
    else {
        header.style.background ='';
        header.style.backdropFilter = '';
}
});


const sections = document.querySelectorAll('section'); // Get all sections
const links = document.querySelectorAll('.nav-li a'); // Get navigation links
let isScrollingAllowed = true; // Flag
let lastClickTime = 0;

// change selected link in navbar when a link is clicked
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump-to-anchor behavior

        // check if scrolling is allowed
        if (!isScrollingAllowed) return;

        // disable scrolling temporarily
        isScrollingAllowed = false;

        // get the target section's ID from the link's href
        const targetId = this.getAttribute('href').substring(1);

        // find the target section by ID
        const targetSection = document.getElementById(targetId);

        // scroll to the target section with smooth behavior
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // remove the selected class from all links
        links.forEach(link => link.classList.remove('selected'));

        // add the 'selected' class to the clicked link
        this.classList.add('selected');

        // update the last click time
        lastClickTime = new Date().getTime();

        setTimeout(() => {
            isScrollingAllowed = true;
        }, 1000);
    });
});


// Remove selected link when scrolling and rotate logo
window.addEventListener('scroll', function (e) {
    const currentTime = new Date().getTime();
    const clickAnimationDuration = 1000; // Animation duration in milliseconds

    // check if the time elapsed since the last click is beyond the animation duration
    if (currentTime - lastClickTime > clickAnimationDuration) {
        links.forEach(link => link.classList.remove('selected'));
    }

    // change logo rotation on scroll
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY;
    const rotationAngle = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 360;
    logo.style.transform = `rotate(${rotationAngle}deg)`;
});


ScrollReveal().reveal('#top-name', {
    delay: 300,               // Delay in milliseconds
    duration: 1000,           // Duration of the animation in milliseconds
    origin: 'left',         // Animation starting point (top, right, bottom, left)
    distance: '50px',         // Distance from the starting point
    easing: 'ease-out',       // Easing function
    interval: 200             // Interval between each element's animation
});


ScrollReveal().reveal('#bottom-name', {
    delay: 500,               // Delay in milliseconds
    duration: 1500,           // Duration of the animation in milliseconds
    origin: 'right',         // Animation starting point (top, right, bottom, left)
    distance: '50px',         // Distance from the starting point
    easing: 'ease-out',       // Easing function
    interval: 200             // Interval between each element's animation
});


ScrollReveal().reveal('.project', {
    delay: 400,               // Delay in milliseconds
    duration: 1000,           // Duration of the animation in milliseconds
    origin: 'bottom',         // Animation starting point (top, right, bottom, left)
    distance: '50px',         // Distance from the starting point
    easing: 'ease-out',       // Easing function
    interval: 200             // Interval between each element's animation
  });

 
// Initialize ScrollReveal
ScrollReveal().reveal('#social-ul li', {
    delay: 400,               // Delay in milliseconds
    duration: 1000,           // Duration of the animation in milliseconds
    origin: 'bottom',         // Animation starting point (top, right, bottom, left)
    distance: '50px',         // Distance from the starting point
    easing: 'ease',           // Easing function
    interval: 0            // Interval between each element's animation
  });

  




