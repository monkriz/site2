var gulp=require('gulp');
gulp.task('move',function(){
gulp.src('css/style.css').pipe(gulp.dest('demo/css/'));
});