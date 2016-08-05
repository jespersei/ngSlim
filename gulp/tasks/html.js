var gulp        = require("gulp"),
    htmlmin     = require("gulp-minify-html");

gulp.task("html-index", function() {
    return gulp.src("./templates/index.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./public"));
});

gulp.task("html-modules", function() {
    return gulp.src(["./templates/modules/**/**/*.html"])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./public/html"));
});