module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;

    var concat = require('gulp-concat');

    gulp.task('scripts:base', function() {
        return gulp.src(project.app + "/libs/**/*.js" )
            .pipe(concat(project.name + "-base.js"))
            .pipe(gulp.dest(project.app + "/dist/js"));
    });
};