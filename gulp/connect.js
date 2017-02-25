module.exports = function() {
    var gulp = this.gulp;

    var connect = require('gulp-connect');

    gulp.task('connect', function() {
        connect.server({
            root: './',
            port: 7700
        });
    });
};