// Smooth scrolling for navigation links and active link highlight
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Highlight active link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Simple form validation with custom messages
document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('input[type="email"]');
    if (!email.value.includes('@')) {
        e.preventDefault();
        showToast('Please enter a valid email address.', 'error');
    }
});

// Responsive mobile menu toggle with animation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.classList.add('animate__animated', 'animate__fadeIn');
});

// Form submission handling with toast notifications
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = this;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            form.reset();
            showToast('Thank you for your message. We will get back to you soon. God bless you!', 'success');
        } else {
            showToast('An error occurred. Please try again later.', 'error');
        }
    };

    xhr.send(data);
});

// Function to show toast notifications
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    setTimeout(() => {
        toast.classList.remove('show');
        document.body.removeChild(toast);
    }, 3000);
}

// Make image visible on scroll with smooth animation
document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.querySelector('.pastor-image');

    function handleScroll() {
        const rect = imageContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            imageContainer.classList.add('visible');
            imageContainer.classList.add('animate__animated', 'animate__fadeIn');
        } else {
            imageContainer.classList.remove('visible');
            imageContainer.classList.remove('animate__animated', 'animate__fadeIn');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once to check if the image is already in view
});

// Highlight navigation items on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

// Fade in sections on scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                section.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once to check if the sections are already in view
});


