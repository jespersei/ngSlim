"ue strict"

var gulp        = require("gulp"),
    watch       = require("gulp-watch"),
    compressor  = require("node-minify");

gulp.task("js-vendors", function() {
    new compressor.minify({
        type: "uglifyjs",
        fileIn: [

            "./app/assets/js/bootstrap.min.js",
            "./app/assets/js/retina-1.1.0.js",
            "./app/assets/js/jquery.hoverdir.js",
            "./app/assets/js/jquery.hoverex.min.js",
            // "./app/assets/js/jquery.prettyPhoto.js",
            "./app/assets/js/jquery.isotope.min.js",
            // "./app/assets/js/custom.js",
            // "./app/assets/js/portfolio.js",

            // "./app/lib/jquery.min.js",
            // "./app/assets/bootstrap-assets/js/bootstrap.min.js",
            // "./app/assets/js/custom.js",
            // "./app/assets/plugins/owl-carousel/owl.carousel.min.js",
            // "./app/assets/js/jquery.easing.min.js",
            // "./app/assets/plugins/waypoints/jquery.waypoints.min.js",
            // "./app/assets/plugins/countTo/jquery.countTo.js",
            // "./app/assets/plugins/inview/jquery.inview.min.js",
            // "./app/assets/plugins/Lightbox/dist/js/lightbox.min.js",
            // "./app/assets/plugins/WOW/dist/wow.min.js",
            "./app/ng/angular.min.js",
            "./app/ng/angular-ui-router.min.js",
            "./app/ng/angular-deckgrid.js",
            "./app/app.js",
            "./app/ng/config/app.routes.js",
            "./app/ng/config/app.run.js",
            "./app/ng/config/app.main.controller.js"
            // "./app/ng/config/app.main.factory.js",
            // "./app/ng/config/app.service.js",
        ],
        fileOut: "./public/js/vendors.min.js",
        callback: function(err, min) {
            if (err) {
                console.log(err);
            } else {
            }
        }
    });
});  

gulp.task("js-modules", function() {  
    new compressor.minify({
        type: "uglifyjs",
        fileIn: "./app/modules/**/*.js",
        fileOut: "./public/js/modules.min.js",
        callback: function(err, min) {
            if (err) {
                console.log(err);
            } else {}
        }
    });
});