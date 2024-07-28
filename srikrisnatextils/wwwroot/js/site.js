document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function setActiveClass() {
        const currentUrl = window.location.href;
        navLinks.forEach(link => {
            if (link.href === currentUrl) {
                link.classList.add('active');
            }
        });
    }

    setActiveClass();

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeActiveClass();
            link.classList.add('active');
        });
    });
});
