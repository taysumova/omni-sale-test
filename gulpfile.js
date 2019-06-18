const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass");
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/scss/**/*.scss'
];

const jsFiles = [
    './src/js/lib.js',
    './src/js/some.js'
];

function styles() {
    return gulp.src(cssFiles)
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('style.css'))
                .pipe(autoprefixer({
                    browsers: ['> 0.1%'], 
                    cascade: false
                }))
                .pipe(cleanCSS({
                    level: 2
                }))
                .pipe(gulp.dest('./build/css'))
                .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(concat('app.js'))
                .pipe(uglify({
                    toplevel: true
                }))
                .pipe(gulp.dest('./build/js'))
                .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        tunnel: true
    });
    
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function clean() {
    return del(['build/*'])
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, 
                        gulp.parallel(styles, scripts)
                        ));

gulp.task('dev', gulp.series('build', 'watch'));