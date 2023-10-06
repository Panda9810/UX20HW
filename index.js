$(document).ready(function() {
    console.log('JavaScript code is running.');
    $('.page-button').hover(
        function() {
            console.log('Mouse entered the element.');
            $(this).css('background-color', 'blue'); 
        },
        function() {
            console.log('Mouse left the element.');
            $(this).css('background-color', ''); 
        }
    );
 $('header img').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );
    $(document).ready(function() {
        $('header ul a').hover(
            function() {
                $(this).toggleClass('nav-hover');
            }
        );
    });    
    

$(document).ready(function() {
    console.log('JavaScript code is running.');
    $('header img').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.animation = 'fadeInUp 1s forwards';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.animation = 'fadeInUp 1s forwards';
    }
});

$('.page-button').hover(
    function() {
        console.log('Mouse entered the element.');
        $(this).css('background-color', 'blue');
    },
    function() {
        console.log('Mouse left the element.');
        $(this).css('background-color', '');
    }
);
})
//
$(document).ready(function() {
    console.log('JavaScript code is running.');

    // Bounce animation for the logo
    $('.logo').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );

    // Bounce animation for the "Work" header
    $('.animated-title').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );

    // Button hover effect
    $('.page-button').hover(
        function() {
            console.log('Mouse entered the element.');
            $(this).css('background-color', 'blue');
        },
        function() {
            console.log('Mouse left the element.');
            $(this).css('background-color', '');
        }
    );

    // Navigation link hover effect
    $('header ul a').hover(
        function() {
            $(this).toggleClass('nav-hover');
        }
    );

    // Animated text fadeInUp effect
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.animation = 'fadeInUp 1s forwards';
    }
});