'use strict';

module.exports = function () {
  var config = {
    mode: {
      symbol: {
        sprite: '../img/sprite.svg',
        render: {
          scss: {
            dest: '../style/common/svg_sprite.scss'
          }
        },
        example: {
          dest: '../style/common/spriteSvgDemo.html'
        }
      }
    }
  };
  var config2 = {
    mode: {
      css: {
        layout: 'diagonal',
        sprite: '../img/sprite.svg',
        bust: false,
        render: {
          scss: {
            dest: '../style/common/svg_sprite.scss'
          }
        },
        example: {
          dest: '../style/common/spriteSvgDemo.html'
        }
      }
    }
  };

  $.gulp.task('sprite:svg', function () {
    return $.gulp.src('./source/sprite/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite(config))
      .pipe($.gulp.dest('./source'));
  });
};