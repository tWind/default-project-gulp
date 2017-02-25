module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;
    
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src(project.app + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(project.app + '/dist/css/'));
};