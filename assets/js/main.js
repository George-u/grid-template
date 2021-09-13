$(document).ready(function() {
    $('.header-navbar__hamburger').on('click', function() {
        $(this).toggleClass('header-navbar__hamburger--active');
        $('.header-navbar__list').toggleClass('header-navbar__list--active');
    });
});