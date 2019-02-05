const gulp =        require('gulp'),
      sass =        require('gulp-sass'),
      sourcemaps =  require('gulp-sourcemaps'),
      plumber =     require('gulp-plumber'),
      browserSync = require('browser-sync').create(),
      reload =      browserSync.reload;
 
// Compile sass, map source, then reload  -----------------------
gulp.task('sass', function() {
    gulp.src('./app/styles/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/styles/'))
        .pipe(reload({
            stream: true
        }))
});

// Watchers and browsersync any file changes ----------------------------------
gulp.task('sync', function() {
 
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
    gulp.watch('./app/styles/sass/*.scss', ['sass']);
    
});

// `gulp` command   ---------------------------------------
gulp.task('default', ['sass', 'sync']);