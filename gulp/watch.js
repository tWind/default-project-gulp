module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;

    gulp.watch(project.app + '/**/*.scss', ['styles:sass']);
    gulp.watch(
        [
            project.blocks + '/**/*.js',
            project.app + '/js/*.js'
        ],
        ['scripts:run']);
    gulp.watch([project.templates + '/*.html', project.blocks + '/**/*.html'], ['html:build']);

    // Globs beginning with "./" doesn't trigger file events :cc
    //gulp.watch("public/img/sprites/**/*.png", ['sprite']);
};
module.exports.dependencies = ['styles:sass', 'scripts:run', 'html:build'];