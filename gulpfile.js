"use strict";

var requireDir  = require("require-dir"),
    gulp        = require("gulp"),
    watch       = require("gulp-watch"),
    compressor  = require("node-minify"),
    htmlmin     = require("gulp-minify-html"),
    concat      = require("gulp-concat"),
    merge       = require("merge-stream"),
    clean       = require("gulp-clean"),
    path        = require("path"),
    minifyCss   = require("gulp-minify-css"),
    sass        = require("gulp-sass");

//requireDir('./gulp'); 
requireDir('./gulp/tasks'); 
requireDir('./gulp'); 

// requireDir('./gulp/test.js'); 
// requireDir('./gulp/deploy.js'); 

gulp.task("default", ["html-index","html-modules","sass","css","js-vendors","js-modules"], function(){

    gulp.watch("./templates/index.html", ["html-index"]);

    gulp.watch("./templates/modules/**/**/*.html", ["html-modules"]);

    gulp.watch([
            "./app/assets/**/**/*.js",
            "./app/lib/**/*.js",
            "./app/ng/**/*.js",
            "./app/app.js"
        ], ["js-vendors"]);

    gulp.watch("./app/modules/**/*.js", function() {
        gulp.start("js-modules");
    });

    gulp.watch("./app/assets/css/*.css", function() {
        gulp.start("css");
    });

    gulp.watch("./app/assets/sass/**/*.scss", function() {
        gulp.start("sass");
    });

});











