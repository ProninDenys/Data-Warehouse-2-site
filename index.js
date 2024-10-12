// Smooth scroll for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Action for the "Request Demo" button
const demoButton = document.querySelector('.request-demo');
demoButton.addEventListener('click', () => {
    alert('Demo request received! Thank you for your interest.');
});

// Hover animation for "Learn More" buttons
const learnMoreButtons = document.querySelectorAll('.learn-more-button');
learnMoreButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Flip animation for social media icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.querySelector('.icon-front').style.transform = 'rotateY(-180deg)';
        icon.querySelector('.icon-back').style.transform = 'rotateY(0deg)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.querySelector('.icon-front').style.transform = 'rotateY(0deg)';
        icon.querySelector('.icon-back').style.transform = 'rotateY(180deg)';
    });
});

// Animate elements on scroll using Intersection Observer
const observerOptions = {
    threshold: 0.2 // element will be animated when 20% of its height enters the viewport
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('.feature-card, .card, .container-2').forEach(section => {
    observer.observe(section);
});
