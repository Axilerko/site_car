

const modal = document.querySelector('.modal'),
    redCross = document.querySelectorAll('.modal__cross'),
    modalThanks = document.querySelector('.modal__thanks'),
    modalCallback = document.querySelector('.modal__callback'),
    modalFastCallback = document.querySelector('.modal__fastCallback'),

    modalBtn = document.querySelectorAll('.header__redBtn'),
    thanksBtn = document.querySelectorAll('.thanks-btn'),
    fastCallbackBtn = document.querySelectorAll('.fast-callback-btn'),
    callbackBtn = document.querySelectorAll('.callback-btn');

let inputAll = document.querySelectorAll('input, textarea');

// functions //////////////////////////////////////////////////

const hideTimer = (delay) => {
    setTimeout(() => {
        if (modalCallback.style.display === 'block' || modalFastCallback.style.display === 'block') return;

        modal.style.display = 'none';
        modalThanks.style.display = "none";
    }, delay);
};


const showModal = (buttons, modalBox) => {

    buttons.forEach(element => {
        element.addEventListener('click', () => {
            modal.style.display = 'block';
            modalBox.style.display = 'block';

            inputAll.forEach(elem => {
                elem.value = '';
            });
        });
    });
   
    if (modalBox === modalThanks) { hideTimer(5000); };

};


const hideModal = (modalBox) => {

    redCross.forEach(element => {
        element.addEventListener('click', () => {
            modal.style.display = 'none';
            modalBox.style.display = "none";
        })
    })
};


///////////////////////////////////////////////////////////////
showModal(thanksBtn, modalThanks);
showModal(callbackBtn, modalCallback);
showModal(fastCallbackBtn, modalFastCallback);
hideModal(modalThanks);
hideModal(modalCallback);
hideModal(modalFastCallback);





// digital-carousel
$('.digital-carousel').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  autoplay:true,
  autoplaySpeed: 3000,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// slider-carousel
$('.slider-carousel').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// function($) {

//     "use strict";
    
//     var cfg = {
//         scrollDuration : 800, // smoothscroll duration
//         mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
//     },

//     $WIN = $(window);

//     // Add the User Agent to the <html>
//     // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
//     var doc = document.documentElement;
//     doc.setAttribute('data-useragent', navigator.userAgent);
// }


/* ===================================================================
 * Transcend - Main JS
 *
 * ------------------------------------------------------------------- */
$(function() {
  $('.acc_ctrl').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });
});

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var clPreloader = function() {
        
        $("html").addClass('cl-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                siteBody.removeClass('menu-is-open');
            }
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var clPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        // get items
        $folioItems.each( function(i) {

            var $folio = $(this),
                $thumbLink =  $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];
        
            var item = {
                src  : $href,
                w    : $width,
                h    : $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function(i) {

            $(this).on('click', function(e) {
                e.preventDefault();
                var options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });
    };


   /* Stat Counter
    * ------------------------------------------------------ */
    var clStatCount = function() {
        
        var statSection = $(".s-stats"),
            stats = $(".stats__count");

       try {
           statSection.waypoint({

               handler: function(direction) {

                   if (direction === "down") {

                       stats.each(function () {
                           var $this = $(this);

                           $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                               duration: 4000,
                               easing: 'swing',
                               step: function (curValue) {
                                   $this.text(Math.ceil(curValue));
                               }
                           });
                       });

                   }

                   // trigger once only
                   this.destroy();

               },

               offset: "90%"

           });
       }
       catch (e) {
           console.log(e);
       }
    };


   /* Masonry
    * ---------------------------------------------------- */ 
    var clMasonryFolio = function () {
        
        var containerBricks = $('.masonry');

        try{
            containerBricks.imagesLoaded(function () {
                containerBricks.masonry({
                    itemSelector: '.masonry__brick',
                    resize: true
                });
            });
            // layout Masonry after each image loads
            containerBricks.imagesLoaded().progress( function() {
                containerBricks.masonry('layout');
            });
        }
        catch (e) {

        }


    };


    /* slick slider
     * ------------------------------------------------------ */
    var clSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };


   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


   /* Placeholder Plugin Settings
    * ------------------------------------------------------ */
    var clPlaceholder = function() {
       try{
           $('input, textarea, select').placeholder();
       }
       catch (e) {

       }
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var clAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {

        try{
            AOS.init( {
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 300,
                once: true,
                disable: 'mobile'
            });
        }
        catch (e) {

        }

    };


   /* AjaxChimp
    * ------------------------------------------------------ */
    var clAjaxChimp = function() {
        
        try{
            $('#mc-form').ajaxChimp({
                language: 'es',
                url: cfg.mailChimpURL
            });
        }catch (e) {

        }

        // Mailchimp translation
        //
        //  Defaults:
        //   'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

try{
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: '<i class="fas fa-check"></i> We have sent you a confirmation email',
        1: '<i class="fas fa-exclamation-circle"></i> You must enter a valid e-mail address.',
        2: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
        3: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
        4: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
        5: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.'
    }
}
catch (e) {

}

    };


   /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {
        
        var pxShow  = 500,         // height on which the button will show
        fadeInTime  = 400,         // how slow/fast you want the button to show
        fadeOutTime = 400,         // how slow/fast you want the button to hide
        scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".cl-go-top")
        
        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };


   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {
        
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clPhotoswipe();
        clStatCount();
        clMasonryFolio();
        clSlickSlider();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clAOS();
        clAjaxChimp();
        clBackToTop();

    })();
        
})(jQuery);

