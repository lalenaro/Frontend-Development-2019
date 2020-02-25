var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function(cb) {
  gulp
    .src("*.scss")
    .pipe(sass({ errLogToConsole: true }))
    .on("error", catchErr)
    .pipe(gulp.dest(f => f.base));
  cb();
});
function catchErr(e) {
  console.log(e);
  this.emit("end");
}
gulp.task(
  "default",
  gulp.series("sass", function(cb) {
    gulp.watch("*.scss", gulp.series("sass"));
    cb();
  })
);
