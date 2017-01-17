function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Nav Close
        $('#site-wrapper').removeClass('show-nav');
        $('.nav-toggle').removeClass('flip-hamburger');
    } 
  	else {
        // Nav Open
        $('#site-wrapper').addClass('show-nav');
        $('.nav-toggle').addClass('flip-hamburger');
    }

    var main = function() {
        /* Push body and nav over */
        $('#iphonemenu').on('click', function(event) {
            toggleNav();
        });

        /* Push them back */
        $('.icon-close').on('click', function(event) {
            toggleNav();
        });
    });
};