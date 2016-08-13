/*
 * requestAnimationFrame pollyfill
 */
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
    });
}

// Init Stats
var stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
//document.body.appendChild(stats.domElement);


/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 * @version 1.2.2
 * @author Acauã Montiel <contato@acauamontiel.com.br>
 * @license http://acaua.mit-license.org/
 */
(function($, window) {
    /**
     * Makes a nice constellation on canvas
     * @constructor Constellation
     */
    function Constellation(canvas, options) {
        var $canvas = $(canvas),
            context = canvas.getContext('2d'),
            defaults = {
                star: {
                    color: 'rgba(255, 255, 255, .5)',
                    width: 1
                },
                line: {
                    color: 'rgba(217, 237, 247, .5)',
                    width: 0.2
                },
                position: {
                    x: 0, // This value will be overwritten at startup
                    y: 0 // This value will be overwritten at startup
                },
                width: window.innerWidth,
                height: window.innerHeight,
                velocity: 0.1,
                length: 100,
                distance: 120,
                radius: 150,
                stars: []
            },
            config = $.extend(true, {}, defaults, options);

        function Star() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = (config.velocity - (Math.random() * 0.5));
            this.vy = (config.velocity - (Math.random() * 0.5));

            this.radius = Math.random() * config.star.width;
        }

        Star.prototype = {
            create: function() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.fill();
            },

            animate: function() {
                var i;
                for (i = 0; i < config.length; i++) {

                    var star = config.stars[i];

                    if (star.y < 0 || star.y > canvas.height) {
                        star.vx = star.vx;
                        star.vy = -star.vy;
                    } else if (star.x < 0 || star.x > canvas.width) {
                        star.vx = -star.vx;
                        star.vy = star.vy;
                    }

                    star.x += star.vx;
                    star.y += star.vy;
                }
            },

            line: function() {
                var length = config.length,
                    iStar,
                    jStar,
                    i,
                    j;

                for (i = 0; i < length; i++) {
                    for (j = 0; j < length; j++) {
                        iStar = config.stars[i];
                        jStar = config.stars[j];

                        if (
                            (iStar.x - jStar.x) < config.distance &&
                            (iStar.y - jStar.y) < config.distance &&
                            (iStar.x - jStar.x) > -config.distance &&
                            (iStar.y - jStar.y) > -config.distance
                        ) {
                            if (
                                (iStar.x - config.position.x) < config.radius &&
                                (iStar.y - config.position.y) < config.radius &&
                                (iStar.x - config.position.x) > -config.radius &&
                                (iStar.y - config.position.y) > -config.radius
                            ) {
                                context.beginPath();
                                context.moveTo(iStar.x, iStar.y);
                                context.lineTo(jStar.x, jStar.y);
                                context.stroke();
                                context.closePath();
                            }
                        }
                    }
                }
            }
        };

        this.createStars = function() {
            var length = config.length,
                star,
                i;

            context.clearRect(0, 0, canvas.width, canvas.height);

            for (i = 0; i < length; i++) {
                config.stars.push(new Star());
                star = config.stars[i];

                star.create();
            }

            star.line();
            star.animate();
        };

        this.setCanvas = function() {
            canvas.width = config.width;
            canvas.height = config.height;
        };

        this.setContext = function() {
            context.fillStyle = config.star.color;
            context.strokeStyle = config.line.color;
            context.lineWidth = config.line.width;
        };

        this.setInitialPosition = function() {
            if (!options || !options.hasOwnProperty('position')) {
                config.position = {
                    x: canvas.width * 0.5,
                    y: canvas.height * 0.5
                };
            }
        };

        this.loop = function(callback) {
            callback();

            window.requestAnimationFrame(function() {
                stats.begin(); // Only for Stats
                this.loop(callback);
                stats.end(); // Only for Stats
            }.bind(this));
        };

        this.bind = function() {
            $canvas.on('mousemove', function(e) {
                config.position.x = e.pageX - $canvas.offset().left;
                config.position.y = e.pageY - $canvas.offset().top;
            });
        };

        this.init = function() {
            this.setCanvas();
            this.setContext();
            this.setInitialPosition();
            this.loop(this.createStars);
            this.bind();
        };
    }

    $.fn.constellation = function(options) {
        return this.each(function() {
            var c = new Constellation(this, options);
            c.init();
        });
    };
})($, window);

// Init plugin
$('canvas').constellation({
    star: {
        width: 3
    },
    line: {
        color: 'rgba(217, 237, 247, .5)'
    },
    radius: 250
});

$(document).ready(function() {
    /***************** Navbar-Collapse ******************/

    // $(window).scroll(function () {
    //     if ($(".navbar").offset().top > 50) {
    //         $(".navbar-fixed-top").addClass("top-nav-collapse");
    //     } else {
    //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //     }
    // });

    // /***************** Page Scroll ******************/

    // $(function () {
    //     $('a.page-scroll').bind('click', function (event) {
    //         var $anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1500, 'easeInOutExpo');
    //         event.preventDefault();
    //     });
    // });

    // /***************** Scroll Spy ******************/

    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // })

    // /***************** Owl Carousel ******************/

    // $("#owl-hero").owlCarousel({

    //     navigation: true, // Show next and prev buttons
    //     slideSpeed: 3900,
    //     paginationSpeed: 1800,
    //     singleItem: true,
    //     transitionStyle: "fadeUp",
    //     autoPlay: true,
    //     navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    // });


    // /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#owl-hero .item').css('height', slideHeight);

    $(window).resize(function() {
        $('#owl-hero .item').css('height', slideHeight);
    });
    // /***************** Owl Carousel Testimonials ******************/

    // $("#owl-testi").owlCarousel({

    //     navigation: false, // Show next and prev buttons
    //     paginationSpeed: 400,
    //     singleItem: true,
    //     transitionStyle: "backSlide",
    //     autoPlay: true

    // });
    // /***************** Countdown ******************/

    // $('#fun-facts').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
    //     if (visible) {
    //         $(this).find('.timer').each(function () {
    //             var $this = $(this);
    //             $({
    //                 Counter: 0
    //             }).animate({
    //                 Counter: $this.text()
    //             }, {
    //                 duration: 2000,
    //                 easing: 'swing',
    //                 step: function () {
    //                     $this.text(Math.ceil(this.Counter));
    //                 }
    //             });
    //         });
    //         $(this).unbind('inview');
    //     }
    // });
    // /***************** Google Map ******************/

    // /*function initialize() {
    //     var mapCanvas = document.getElementById('map');
    //     var mapOptions = {
    //         center: new google.maps.LatLng(14.577744, 121.050119),
    //         zoom: 17,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     var map = new google.maps.Map(mapCanvas, mapOptions);
    // }*/

    // // google.maps.event.addDomListener(window, 'load', initialize);

    // /***************** Wow.js ******************/

    // new WOW().init();

    // /***************** Preloader ******************/




    var preloader = $('.preloader');
    $(window).load(function() {
        preloader.remove();
    });
});
