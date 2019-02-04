const gulp =        require('gulp'),
      sass =        require('gulp-sass'),
      sourcemaps =  require('gulp-sourcemaps'),
      browserSync = require('browser-sync').create(),
      reload =      browserSync.reload;
 
// Compile sass, map source, then reload  [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]
gulp.task('sass', function() {
    gulp.src('./app/styles/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/styles/'))
        .pipe(reload({
            stream: true
        }))
});

// Browsersync any file changes [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]
gulp.task('sync', function () {
 
    // Serve files from the root of this project
    browserSync.init({
        // server: {
        //     baseDir: "app"
        // },
        proxy: 'localhost:8080', // for use with Vagrant vm
        notify: false // removes the "Browsersync: connected" browser notification
    });
    
    // Watchers
    gulp.watch('./app/**/*.+(html|js|php)', reload);
    gulp.watch('./app/styles/sass/*.sass', ['sass']);

});

// Use `gulp` in command line   [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]
gulp.task('default', ['sass', 'sync']);