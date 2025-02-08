$( document ).ready(function() {
    var num = Math.random();
    $(document).on('click', function(event) {
        var clickX = event.pageX;
        var clickY = event.pageY;
        
        var $explosion = $('<img>', {
            src: '../img/explosion2.gif?n='+num,
            class: 'explosion'
        });

        $explosion.css({
            left: clickX - 78 + 'px',
            top: clickY - 115 + 'px'
        });

        $('body').append($explosion);
        num=(num+1);// % 4;

        setTimeout(function() {
            $explosion.fadeOut(function() {
                $(this).remove();
            });
        }, 500);
    });
});
