// Typing Effect

const text = "Web Developer";
const typing = document.getElementById("typing");

let index = 0;

function typeText(){

    if(index < text.length){

        typing.textContent += text.charAt(index);
        index++;

        setTimeout(typeText,120);
    }
}

typeText();


// Active Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});


// Scroll Animation

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .about-content, .contact-form"
);

elements.forEach(el => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

elements.forEach(el => observer.observe(el));


// Contact Form

const form = document.querySelector(".contact-form");
const message = document.getElementById("success-message");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    message.textContent = "Message sent successfully!";

    form.reset();

    setTimeout(() => {
        message.textContent = "";
    }, 3000);

});
