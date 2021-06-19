var gulp = require('gulp'),

	sass = require('gulp-sass'), //css
    csso = require('gulp-csso'), // min-css
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS  = require ('gulp-clean-css'),// удаляет неспользуемые

	terser = require('gulp-terser'), // js
	uglify = require('gulp-uglifyes'), // min js

	concat = require('gulp-concat'), // 2 => 1

    watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src([
        'css/style.scss',
        ])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer())
        // .pipe(csso())
        .pipe(concat('style.css')) 
        .pipe(gulp.dest('./buld/css'))
});
//
// gulp.task('js', function(){
//     return gulp.src([
//         'js/script.js',
//         'js/scriptJQ.js',
//         ])
//         .pipe(terser())
//         .pipe(uglify())
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest('./buld/js'))
// });
//
// gulp.task('js-modules', function () {
//     return gulp.src([
//         'app/script/jquery-3.4.1.min.js',
//         'app/script/bootstrap.min.js',
//     ])
//         .pipe(terser())
//         .pipe(uglify())
//         .pipe(concat('modules.js'))
//         .pipe(gulp.dest('./buld/app'));
// });/////////////////////////////////////////////
//
//
// gulp.task('fonts', function () {
//     return gulp.src('css/fonts/*.otf')
//         .pipe(gulp.dest('./buld/css/fonts'));
// });
//
// gulp.task('css-modules', function () {
//    return gulp.src([
//        'app/slick-1.8.1/slick/slick.scss',
//        'app/slick-1.8.1/slick/slick-theme.scss',
//    ])
//        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//        .pipe(cleanCSS({compatibility: 'ie8'}))
//        .pipe(autoprefixer())
//        .pipe(concat('modules.min.css'))
//        .pipe(gulp.dest('./buld/app'));
// });
//
//
// gulp.task('default', gulp.series(
//     'js-modules',
//     'slick-min-scc',
//     'js',
//     'sass',
//     // 'fonts',
// ));


gulp.task('watch', function () {
    watch("css/style.scss", gulp.series('sass'));
});
