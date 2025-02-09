$( document ).ready(function() {
    var walkers = [
        { src: 'img/sonicandtails.gif', dir: 'rt' },
        { src: 'img/sonicandtails.gif', dir: 'lt', flipX: true },
        { src: 'img/peppino.gif', dir: 'rt' },
        { src: 'img/Feathereddinosaur.gif', dir: 'rt' },
        { src: 'img/Feathereddinosaur.gif', dir: 'lt', flipX: true },
        { src: 'img/catwalking.gif', dir: 'lt' },
        { src: 'img/catwalking.gif', dir: 'rt', flipX: true },
        { src: 'img/Shadowrun.gif', dir: 'rt' },
        { src: 'img/gem.gif', dir: 'lt' },
        { src: 'media/mchammer.gif', dir: 'lt' },
        { src: 'img/Shadowrun.gif', dir: 'lt', flipX: true },
        { src: 'img/robotflower.gif', dir: 'lt' },
        { src: 'img/robotflower.gif', dir: 'rt', flipX: true },
        { src: 'img/Marioandluigi.gif', dir: 'rt' },
        { src: 'img/Marioandluigi.gif', dir: 'lt', flipX: true },
        { src: 'img/bfrun.gif', dir: 'rt' },
        { src: 'img/bfrun.gif', dir: 'lt', flipX: true }
    ];

    let walkLoop = function () {
        var walkNum = Math.floor(Math.random() * (walkers.length));
        var walker = walkers[walkNum];

        var $walker = $('<img>', {
            src: walker.src,
            class: 'walk-' + walker.dir
        });

        if (walker.flipX) {
            $walker.css('transform', 'scaleX(-1)');
        }
        
        $('#walk-container').append($walker);
        let interval = 6000+Math.floor(Math.random() * 24000);

        setTimeout(walkLoop, interval);
        
        setTimeout(function() {
            $walker.fadeOut(function() {
                $(this).remove();
            });
        }, 14000);
    };
    setTimeout(walkLoop, 0);
});
