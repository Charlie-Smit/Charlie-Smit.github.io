$( document ).ready(function() {
    let num = Math.random();
    $(document).on('click', function(event) {
        let clickX = event.pageX;
        let clickY = event.pageY;
        let location = window.location.protocol !== "file:"? '../img/explosion2.gif?n='+num : 'img/explosion2.gif';

        let $explosion = $('<img>', {
            src: location,
            class: 'explosion'
        });

        $explosion.css({
            left: clickX - 78 + 'px',
            top: clickY - 115 + 'px'
        });

        $('body').append($explosion);
        num=(num+1);

        setTimeout(function() {
            $explosion.fadeOut(function() {
                $(this).remove();
            });
        }, 500);
    });
});
