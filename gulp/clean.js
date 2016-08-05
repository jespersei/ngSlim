"use strict";

var gulp        = require("gulp"),
    path        = require("path");



gulp.task("clean", function() {
    return gulp.src([
            "./public/css",
            "./public/html",
            "./public/js"
        ])
        .pipe(clean({
            force: true
        }));
});
