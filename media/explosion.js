$( document ).ready(function() {
    console.log( "ready!" );
    $(document).on('click', function(event) {
        var clickX = event.pageX;
        var clickY = event.pageY;
        
        console.log('clickx:'+clickX+', y:'+clickY);
        var $explosion = $('<img>', {
            src: '../img/explosion.gif',
            alt: 'Explosion!',
            class: 'explosion'
        });
        console.log('css:'+$explosion.length);

        $explosion.css({
            left: clickX - 50 + 'px',
            top: clickY - 70 + 'px'
        });
        console.log('explode!');
        console.log($('body').length);
        $('body').append($explosion);

        setTimeout(function() {
            $explosion.fadeOut(function() {
                $(this).remove();
                console.log('removing!');
            });
        }, 1600);
    });

    console.log('event registered');

});

console.log('script registered');