// Path: scripts/app.js

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

/* disable logo drag */
document.getElementById('logo').ondragstart = function() { return false; };


//cursor
var cursor = document.getElementById("cursor");
var littleCursor = document.getElementById("little-cursor");

/* scroll to top */
function scollToTop() {
    window.scrollTo(0, 0);
}

/* select home link when on top of page */
if (window.scrollY == 0) {
    
}

/* change background color on mouse move */
/*
document.addEventListener('mousemove', function(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
    const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
    
    const radialGradientElement = document.querySelector('.radial-gradient');
    radialGradientElement.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%,#452c63, #181818)`;    
});
*/


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



/* change cursor position */
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
    littleCursor.style.left = e.clientX + "px",
    littleCursor.style.top = e.clientY + "px";
});



const sections = document.querySelectorAll('section'); // Get all sections
const links = document.querySelectorAll('.nav-li a'); // Get navigation links

let isScrollingAllowed = true; // Initialize the flag variable

// Function to check if an element is in the viewport
function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
);
}


// Change selected link in navbar when a link is clicked
links.forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default jump-to-anchor behavior
    
    // Check if scrolling is allowed
    if (!isScrollingAllowed) return;
    
    // Disable scrolling temporarily
    isScrollingAllowed = false;
    
    // Get the target section's ID from the link's href
    const targetId = this.getAttribute('href').substring(1);
    
    // Find the target section by ID
    const targetSection = document.getElementById(targetId);
    
    // Scroll to the target section with smooth behavior
    if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Remove the 'selected' class from all links
    links.forEach(link => link.classList.remove('selected'));
    
    // Add the 'selected' class to the clicked link
    this.classList.add('selected');
    
    // Enable scrolling after a short delay (adjust this delay as needed)
    setTimeout(() => {
    isScrollingAllowed = true;
    }, 1000); // 1000 milliseconds (1 second) delay
});
});









