$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1599,
                    settings: {
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1499,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    } 

    if ( $( '.testimonials' ).length ) {
        $( '.testimonials' ).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true
        });
    }

    if ( $( '.collections' ).length ) {
        $( '.collections' ).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:false
        });
    }

} );