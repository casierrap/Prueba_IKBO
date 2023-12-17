document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuLink = document.querySelector('.header ul');
    const close = document.querySelector('.close')

    iconMenu.addEventListener('click', function() {
        menuLink.classList.toggle('show');
    });

    close.addEventListener('click', function() {
        iconMenu.classList.toggle('show');
        menuLink.classList.toggle('show');
    });
});
