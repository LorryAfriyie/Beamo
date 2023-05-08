const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compile scss into css
function compileStyles() {
  return src("./src/app/scss/*.scss").pipe(sass()).pipe(dest("./src/app/css"));
}

// Watch sass file for any changes
function watchTask() {
  watch(["./src/app/scss/*.scss"], compileStyles);
}

exports.default = series(compileStyles, watchTask);
