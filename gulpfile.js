/**
 * Created by tWind on 30.10.2016.
 */

var project = {
    name: "default",
    app: './public'
};
var gulp = require('gulp');


require('gulp-task-loader')({
    dir: 'gulp',
    project: project
});


gulp.task('default', function() {
    gulp.start([
        'connect'
    ]);
});