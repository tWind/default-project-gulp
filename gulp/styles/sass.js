module.exports = function() {
    var gulp = this.gulp;
    
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');
    
    return gulp.src('./public/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dist/css/'));
};