const {series, parallel, src, dest, watch} = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify-es').default,
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');


function css (){
    return src(["css/app.scss"])
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('app.css'))
        .pipe(dest('../release/css'));
}

function js (){
    return src(["js/app.js"])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(dest('preAssets/js'));
}

function browserify_js (){
    return browserify('preAssets/js/scripts.js').bundle()
        .pipe(source('scripts.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest('../release/js'))
}

function img (){
    return src(["img/**/*.+(jpg|png|jpeg|gif|svg)"])
        .pipe(imagemin())
        .pipe(dest('../release/img'))
}

exports.css = css;
exports.js = series(js, browserify_js);
exports.img = img;
exports.default = series(css, js, browserify_js, img);

exports.watch = function() {
    watch(["css/**/*.+(css|sass|scss)"], css);
    watch(["js/**/*.js"], js);
    watch('preassets/js/scripts.js', browserify_js);
    // watch(["img/**/*.+(jpg|png|jpeg|gif|svg)"], img)
};
