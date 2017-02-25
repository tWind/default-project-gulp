module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;

    var concat = require('gulp-concat');

    gulp.task('scripts:run', function() {
        return gulp.src(project.app + "/blocks/**/*.js" )
            .pipe(concat(project.name + "-run.js"))
            .pipe(gulp.dest(project.app + "/dist/js"));
    });
};