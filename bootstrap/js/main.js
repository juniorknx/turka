// SCROLL EFFECT 

$(".nav-link").click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1100);
});