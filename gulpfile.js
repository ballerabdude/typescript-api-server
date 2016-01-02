var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['ts', 'watch']);

// Compile typescript sources
gulp.task('ts', function() {
    gulp.src(['src/*.ts', 'src/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch(['src/*.ts', 'src/**/*.ts'], ['ts']);
});

gulp.task('default', ['ts', 'watch'], function() {
    nodemon({script: 'build/app.js'});
});
