function fixDiv() {
    var $cache = $('#main-nav');
    if ($(window).scrollTop() > 100)
        $cache.css({
            'position': 'fixed',
            'top': '0px',
            'width': '100%'
        });
    else
        $cache.css({
            'position': 'relative',
            'top': 'auto'
        });
}
$(window).scroll(fixDiv);
fixDiv();
