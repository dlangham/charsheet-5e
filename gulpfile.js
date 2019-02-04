const gulp =        require('gulp'),
      less =        require('gulp-less'),
      browserSync = require('browser-sync').create(),
      reload =      browserSync.reload;
 

// Compile .less ////////////////////////////
gulp.task('less-to-css', function() {  
    return gulp.src('./app/styles/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./app/styles/'))
        .pipe(reload({
            stream: true
        }))
});

// Watch for .less changes /////////////////////////////
gulp.task('watch-less', function() {  
    // gulp.watch('./app/styles/less/*.less', ['less-to-css']);
    gulp.watch('./app/styles/less/*.less').on('change', function() {
        gulp.run('less-to-css');
    });
});

// auto-sync file changes //////////////////////////////
gulp.task('sync', function () {
 
    // Serve files from the root of this project
    browserSync.init({
        // server: {
        //     baseDir: "app"
        // },
        proxy: 'localhost:8080', // for use with Vagrant vm
        notify: false // removes the "Browsersync: connected" browser notification
    });
    
    // Any changes will reload webpage
    gulp.watch('./app/**/*.+(html|css|js|php)').on('change', reload);

});
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-less', 'sync']);