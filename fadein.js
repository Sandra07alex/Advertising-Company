window.addEventListener('scroll', function() {
    const fadeInElement = document.querySelector('.fade-in-from-outside');
    const elementPosition = fadeInElement.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
        fadeInElement.classList.add('fade-in');
    }
});
