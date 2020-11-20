try{
    //Smooth scrolling page
    var $page = $('html, body');
    $('a[href*="#"]:not([href=#0])').on('click', function() {
        $page.animate({
            scrollTop: $($(this).attr('href').length <= 1?"#top":$.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
}
catch (e) {
    dd(e, 'red');
}