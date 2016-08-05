var gulp        = require("gulp"),
    concat      = require("gulp-concat"),
    minifyCss   = require("gulp-minify-css"),
    sass        = require("gulp-sass");

gulp.task("sass", function() {
    return gulp.src("./app/assets/sass/main.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("./app/assets/css"));
});

gulp.task("css", function() {
    return gulp.src([
            "./app/assets/bootstrap-assets/css/bootstrap.min.css",
            "./app/assets/bootstrap-assets/css/bootstrap-theme.min.css",
            "./app/assets/plugins/owl-carousel/owl.carousel.css",
            "./app/assets/plugins/owl-carousel/owl.theme.css",
            "./app/assets/plugins/owl-carousel/owl.transitions.css",
            "./app/assets/plugins/Lightbox/dist/css/lightbox.css",
            "./app/assets/plugins/Icons/et-line-font/style.css",
            "./app/assets/plugins/animate.css/animate.css",
            "./app/assets/css/main.css",
        ])
        .pipe(minifyCss())
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest("./public/css/"));
});
