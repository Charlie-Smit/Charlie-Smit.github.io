$( document ).ready(function() {
    var num = 0;
    $(document).on('click', function(event) {
        var clickX = event.pageX;
        var clickY = event.pageY;
        
        var $explosion = $('<img>', {
            src: '../img/explosion'+num+'.gif',
            alt: 'Explosion!',
            class: 'explosion'
        });

        $explosion.css({
            left: clickX - 50 + 'px',
            top: clickY - 70 + 'px'
        });

        $('body').append($explosion);
        num=(num+1) % 4;

        setTimeout(function() {
            $explosion.fadeOut(function() {
                $(this).remove();
            });
        }, 1000);
    });
});
