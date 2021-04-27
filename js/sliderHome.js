const $responsiveCarousel = document.querySelector(".js-carousel--responsive");


new Glider($responsiveCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".js-carousel--responsive-dots",
    responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

const glider = new Glider($responsiveCarousel);

function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;

    function slide() {
        slideTimeout = setTimeout(
            function() {
                if (nextIndex >= slidesCount) {
                    nextIndex = 0;
                }
                slider.scrollItem(nextIndex++);
            },
            miliseconds
        );
    }

    slider.ele.addEventListener('glider-animated', function() {
        window.clearInterval(slideTimeout);
        slide();
    });

    slide();
}

sliderAuto(glider, 3000);