window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset;
    let parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';

    // Анимация при прокрутке
    const elements = document.querySelectorAll('.animate-slide-up, .animate-fade');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
            element.classList.add('visible');
        }
    });
});
