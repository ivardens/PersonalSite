'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = '';

    spriteData = $.gulp.src('./source/sprite/png/*.png')
      .pipe($.spritesmith({
        imgName: '../img/sprite.png',
        cssName: 'png_sprite.scss',
        cssFormat: 'css',
        imgPath: '../img/sprite.png',

        algorithm: 'alt-diagonal',
        padding: 20
      }));

    var imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest('./source/img/'));

    var cssStream = spriteData.css
      // .pipe($.gp.csso())
      .pipe($.gulp.dest('./source/style/common'));

    return $.merge(imgStream, cssStream);
  });
};