const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

const src = {
    style: './scss/style.scss',
    build: './',
    minImages: './assets/images',
    cssOptimizeRoute: './style.css',
}

const scss = () => gulp.src(src.style)
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: false }))
    .pipe(gulp.dest(src.build))
    .pipe(browserSync.stream());

const server = () => {
    browserSync.init({
        server: src.build
    });

    gulp.watch("./scss/**/*.scss", gulp.series(scss));
    gulp.watch('./*.html').on('change', browserSync.reload);
}


const cssOptimize = () => gulp.src(src.cssOptimizeRoute)
    .pipe(csso({
        restructure: false,
        sourceMap: true,
        debug: true
    }))
    .pipe(gulp.dest(src.build));

gulp.task("server", gulp.series(scss, cssOptimize, server));