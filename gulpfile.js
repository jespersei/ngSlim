"use strict";

var requireDir  = require("require-dir"),
    gulp        = require("gulp"),
    watch       = require("gulp-watch");

requireDir('./gulp/tasks'); 
requireDir('./gulp'); 
// requireDir('./gulp/test.js'); 
// requireDir('./gulp/deploy.js'); 

gulp.task("default", [
        "html-index",
        "html-modules",
        "compass",
        "css",
        "js-vendors",
        "js-modules"
    ], function(){

    gulp.watch("./templates/index.html", ["html-index"]);

    gulp.watch("./app/modules/**/**/*.html", ["html-modules"]);

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
        gulp.start("compass");
    });

});











