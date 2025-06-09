// ------------Typing Effect--------------------
var typingEffect = new Typed(".multiText", {
    strings: ["AI Enthusiast", "Automation Engineer", "Reducing Bug", "Optimizing Manual Effort", "Faster Delivery"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});

// ----------------About tab-------------------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------------------Mobile Navigation Toggle----------------------------
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('nav ul'); // Select the ul inside nav

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-active');
        // Optional: Toggle icon between bars and close (if you have a close icon)
        // menuIcon.classList.toggle('fa-bars');
        // menuIcon.classList.toggle('fa-xmark'); // Requires fa-xmark class
    });

    // Close dropdown when a navigation link is clicked (good for UX)
    navLinks.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-links-active');
            // Optional: Reset icon back to bars if you toggled it
            // menuIcon.classList.remove('fa-xmark');
            // menuIcon.classList.add('fa-bars');
        });
    });

    // Close dropdown if clicked outside the menu icon or the nav links (optional)
    document.addEventListener('click', (event) => {
        // Check if the clicked element is not the menu icon AND not inside the nav links
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('nav-links-active');
            // Optional: Reset icon back to bars
            // menuIcon.classList.remove('fa-xmark');
            // menuIcon.classList.add('fa-bars');
        }
    });
}


// ---------------------Submit form----------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7SGK2cgH6-te891_u_oKFpL8-eYY291RJHVOcNqKrXhRWZ9wLlJqw4lJ2SBbp6Gk/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) { // Ensure the form element exists before adding an event listener
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Your message sent successfully.";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
}