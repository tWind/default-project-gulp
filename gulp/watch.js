module.exports = function() {
    var gulp = this.gulp;
    var project = this.opts.project;

    gulp.watch(project.app + "/**/*.scss", ['styles:sass']);
    gulp.watch(project.blocks + "/**/*.js", ['scripts:run']);

    // Globs beginning with "./" doesn't trigger file events :cc
    //gulp.watch("public/img/sprites/**/*.png", ['sprite']);
};
module.exports.dependencies = ['styles:sass', 'scripts:run'];