module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;
    var gih = require('gulp-include-html');

    return gulp.src(project.templates + '/*.html')
        .pipe(gih({
            baseDir: project.blocks
        }))
        .pipe(gulp.dest(project.htmlBuildDir));
};