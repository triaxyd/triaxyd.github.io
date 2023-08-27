// Path: scripts/app.js

/* disable logo drag */
document.getElementById('logo').ondragstart = function() { return false; };

/* send user to home when refresh */
window.onbeforeunload = function() { 
    window.setTimeout(function () { 
        window.location = 'index.html';
    }, 0); 
    window.onbeforeunload = null; 
}


//cursor
var cursor = document.getElementById("cursor");

/* change cursor */
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});


/* change selected link */
const links = document.querySelectorAll('li a');
links.forEach(link => {
    link.addEventListener('click',function(){
        links.forEach(link => link.classList.remove('selected'));
        this.classList.add('selected');
    })
});

/* name js */
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








