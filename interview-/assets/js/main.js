$(document).ready(function () {
    var navbarToggler = $(".navbar-toggler, .navbar-collapse");
    var navbarCollapse = $(".navbar-collapse");

    navbarToggler.on("mouseenter", function () {
        navbarCollapse.addClass("show");
    });

    navbarToggler.on("mouseleave", function () {
        navbarCollapse.removeClass("show");
    });
});