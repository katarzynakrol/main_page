$(document).ready(function() {
    $("[rel='tooltip']").tooltip();
    $('.thumbnail').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
    // set the time delay for the hover over and hover out
    var timeDelay = 500;
    $('.thumbnail2').hover(
        //hover over
        function() {
            $(this).find('.caption2').slideDown(timeDelay); //.fadeIn(250)
            $(this).find('.webpageBig, .webpageSmall').animate({
                opacity: 0.4,
                duration: timeDelay
            });
        },
        // hover out
        function() {
            $(this).find('.caption2').slideUp(timeDelay); //.fadeOut(205)
            $(this).find('.webpageBig, .webpageSmall').animate({
                opacity: 1,
                duration: timeDelay
            });
        }
    );
});
