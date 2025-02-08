$( document ).ready(function() {
    console.log( "ready!" );
    $(document).on('click', function(event) {
        var clickX = event.pageX;
        var clickY = event.pageY;
        
        var $explosion = $('<img>', {
            src: '../img/explosion.gif',
            alt: 'Explosion!',
            class: 'explosion'
        }).css({
            left: clickX - 50 + 'px', // Center explosion at the click point
            top: clickY - 70 + 'px'
        });
        console.log('explode!');
        $('body').append($explosion);

        // Hide the explosion after 1.6 seconds
        setTimeout(function() {
            $explosion.fadeOut(function() {
                $(this).remove();
                console.log('removing!');
            });
        }, 1600); // 1600 milliseconds = 1.6 seconds
    });

    console.log('event registered');

});

console.log('script registered');