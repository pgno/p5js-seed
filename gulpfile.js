var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var sass 		= require('gulp-sass');
var concat 		= require('gulp-concat');
var reload 		= browserSync.reload;

var src = {
    scss: 'app/scss/*.scss',
    css:  'app/styles',
    includes:  'app/scripts/includes/**/*.js',
    scripts:  'app/scripts/*.js',
    js : 'app/scripts',
    html: 'app/*.html'
};

gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./app"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.includes, ['includes']);
    gulp.watch([src.html,src.scripts]).on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('includes', function() {
  return gulp.src(src.includes)
    .pipe(concat('includes.js'))
    .pipe(gulp.dest(src.js))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);