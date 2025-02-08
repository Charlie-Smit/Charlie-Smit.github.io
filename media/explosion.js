$(document).on('click', function(event) {
    var clickX = event.pageX;
    var clickY = event.pageY;
    
    // Create a new image element for each click
    var $explosion = $('<img>', {
        src: 'img/explosion.gif', // Replace with your explosion GIF URL
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