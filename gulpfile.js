'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'), //array of tasks
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  merge: require('merge-stream'),
  spritesmith: require('gulp.spritesmith'),
  buffer: require('vinyl-buffer')
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('assets', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sprite:png',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'copy:fonts',
    'copy:image',
    'css:foundation',
    'js:foundation'
  )
));

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel(
    'sass',
    'pug',
    'js:process'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));