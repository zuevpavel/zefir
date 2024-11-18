import ready from 'Utils/documentReady.js';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import {ScrollTrigger } from "gsap/ScrollTrigger.js";
import {CSSRulePlugin } from "gsap/CSSRulePlugin.js";

import Swiper, { Navigation, Pagination, Autoplay, Grid, Mousewheel } from 'swiper';

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, CSSRulePlugin );

ready(function(){

    Swiper.use([Navigation, Pagination, Autoplay, Grid, Mousewheel]);

    const swiper = new Swiper('.swiper', {
        // modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1.1,
        // loopFillGroupWithBlank: true,
        spaceBetween: 10,
        mousewheel: true,
        // loop: true,
        // grabCursor: true,
        breakpoints: {
            500: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3.1,
                spaceBetween: 20,
            },
            1024: {
                centeredSlides: true,
                slidesPerView: 2.63,
                spaceBetween: 30,
            },
        }
    });

    let tt1 = gsap.timeline({paused:true, repeat:1, yoyo:true});
    tt1.to(".about__slide-title p", {opacity: 0, yPercent: -100, duration: 0.7, ease: "power4.out" })
        .to(".about__slide-logo img", {width: '0%', duration: 0.7, ease: "power4.out"}, "-=0.7")
        .to(".about__slide-info", {yPercent: 150, opacity: '1', duration: 0.7, ease: "power4.out"}, "-=0.7")
        .to(".progress-big-about", {strokeDashoffset: '630', duration: 0.7, ease: "power4.out"}, "-=0.7")
        .to(".progress-small-about", {strokeDashoffset: '565', duration: 0.7, ease: "power4.out"}, "-=0.7")
        .to(".about__slide-coast-inner", {opacity: '0', duration: 0.7, ease: "power4.out"}, "-=0.7")
        .to(".preview__list", {yPercent: 150, opacity: '1', duration: 0.7, ease: "power4.out"}, "-=0.7")

    ;

    let btnNext = document.querySelectorAll('.arrow-next')

    btnNext.forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            if (this.classList.contains("arrow-next--last") === false) {
                tt1.restart();
            }
            setTimeout(() => {
                if (this.classList.contains("arrow-next--last") === false) {
                    this.closest(".about__slide").classList.add('d-none');
                    this.closest(".about__slide").nextElementSibling.classList.remove('d-none');

                }
            }, 700);

        };
    });

    let btnPrev = document.querySelectorAll('.arrow-prev')

    btnPrev.forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            if (this.classList.contains("arrow-prev--first") === false) {
                tt1.restart();
            }
            setTimeout(() => {
                if (this.classList.contains("arrow-prev--first") === false) {
                    this.closest(".about__slide").classList.add('d-none');
                    this.closest(".about__slide").previousElementSibling.classList.remove('d-none');
                }
            }, 700);
        };
    });



});



// ScrollTrigger.saveStyles(".second, .third, .fourth, .wallpaper__img, .picture--card-blue, .picture--card-green, .picture--card-red");
ScrollTrigger.saveStyles(".about__slide-title p, .about__slide-info, .fade-up");
gsapTrigger()
function gsapTrigger() {


    ScrollTrigger.matchMedia({
        // "(min-width: 768px)": function() {
        "(min-width: 1px)": function() {
            //about
            gsap.fromTo(CSSRulePlugin.getRule(".border-animate:after"), {cssRule: {scaleX: 0}}, { cssRule: {scaleX: 1},
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__us",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                // markers: true,
                // markers: {startColor: "tomato", endColor: "yellow"},
                }
            });

            gsap.fromTo(".about__header-inner", {y: '150%', opacity: '0'}, {y: '0', opacity: '1',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__us",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                // markers: true,
                // markers: {startColor: "tomato", endColor: "yellow"},
                }
            });

            gsap.fromTo(".about__hero-title", {x: '150%', opacity: '0'}, {x: '0', opacity: '1',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__us",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                // markers: true,
                // markers: {startColor: "tomato", endColor: "yellow"},
                }
            });

            gsap.fromTo(".about__hero-subtitle", {x: '-150%', opacity: '0'}, {x: '0', opacity: '1',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__us",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                // markers: true,
                // markers: {startColor: "tomato", endColor: "yellow"},
                }
            });

            //section.functional
            gsap.utils.toArray('.about__slide-title p').forEach((elem, i) => {
                gsap.fromTo(elem, {yPercent: -150, opacity: 0}, {yPercent: 0, opacity: 1,
                // gsap.to(elem, {y: '0', opacity: '1',
                duration: 0.7,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".about__slide",
                    start: '30% 45%',
                    // end: 'bottom 20%',
                    // toggleActions: "play reset play reset",
                    toggleActions: "play reverse play reverse",

                    // scrub: true,
                    // markers: true,
                    }
                });
            });


            gsap.to(".about__slide-info", {y: '0', opacity: '1',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(".about__slide-coast-inner", {opacity: '1',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(".about__slide-logo img", {width: '100%',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(".progress-big-about", {strokeDashoffset: '70',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(".progress-small-about", {strokeDashoffset: '65',
            duration: 0.7,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".about__slide-top-wrap:after"), { duration: 0.7, cssRule: {scaleX: 1},
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".about__slide-coast:before"), { duration: 0.7, cssRule: {scaleX: 1},
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".about__slide-coast:after"), { duration: 0.7, cssRule: {scaleY: 1},
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".about__slide-title-wrap:after"), { duration: 0.7, cssRule: {width: "100%"},
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".about__slide",
                start: '30% 45%',
                toggleActions: "play reverse play reverse",
                }
            });

            //slider animate

            gsap.to(CSSRulePlugin.getRule(".benefits__title-wrap:after"), { duration: 0.5, cssRule: {scaleX: 1},
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                // markers: true,
                }
            });

            gsap.fromTo(".benefits__title", {y:'150'},{y: '0',
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".benefits__slider-item:after"), { duration: 0.5, cssRule: {scaleX: 1},
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.to(CSSRulePlugin.getRule(".benefits__slider-item:before"), { duration: 0.5, cssRule: {scaleY: 1},
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.fromTo(".benefits__slider-text", {y:'150'},{y: '0',
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                }
            });

            gsap.fromTo(".benefits__slider-img", {scale: 0},{scale: 1,
            scrollTrigger: {
                trigger: ".benefits",
                // start: '30% 45%',
                start: 'top 30%',
                toggleActions: "play reverse play reverse",
                }
            });



        },
    });

}

gsap.utils.toArray(".fade-up").forEach((elem, i) => {
    gsap.fromTo(elem, {x: 150, opacity:0,}, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: elem,
            start: "top 100%",
            end: "bottom 0%",
            // toggleActions: "play pause play reverse",
            toggleActions: "play reverse play reverse",
            // markers: true,
        },
    });
});

gsap.utils.toArray(".button-explode").forEach((btn, i) => {
    btn.addEventListener("click", () => gsap.effects.explode(btn, { direction: "up", duration: 3 }))
  });
