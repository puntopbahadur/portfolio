// ------------Typing Effect--------------------
var typingEffect = new Typed(".multiText", {
    strings: ["AI Enthusiast", "Automation Engineer", "Frontend Developer"],
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
};

// ---------------------Submit form----------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbw7SGK2cgH6-te891_u_oKFpL8-eYY291RJHVOcNqKrXhRWZ9wLlJqw4lJ2SBbp6Gk/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your message sent successfully."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});



