import '@splidejs/splide/css/core';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '#partnersSlider', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows : false,
        pagination: false,
        perPage: 4,
        gap: '64px',
        autoWidth: true,
        autoScroll: {
          speed: 2,
        },
        breakpoints: {
            992: {
                perPage: 3
            },
            576: {
                perPage: 2
            }
        }
      });
      
      splide.mount({AutoScroll});
});