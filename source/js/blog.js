var blog = function() {
    if (document.querySelector('.blog-articles')) {
      // Blog scripts
      var $news = $('.blog-article');
      var $item = $('.blog-titles__item');
      var $wrapMenu = $('.blog-titles__wrap');
      var body = document.body;
      var isPositionArticle = [];

      function positionArticle(element) {
        for (var i = 0; i < element.length; i++) {
          isPositionArticle[i] = element[i].offsetTop;
        }
      }

      function scrollPageFixMenu(e) {
        var scroll = window.pageYOffset;
        if (scroll < $news.offset().top) {
          $wrapMenu.removeClass('fixed');
        } else {
          $wrapMenu.addClass('fixed');
        }
      }

      function scrollPage(e) {
        var scroll = window.pageYOffset;
        for (var i = 0; i < isPositionArticle.length; i++) {
          if (scroll >= $news.eq(0).offset().top + isPositionArticle[i] - 40) {
            $item.eq(i)
              .addClass('blog-titles__active ')
              .siblings().removeClass('blog-titles__active ');
          }
        }
      }

      positionArticle($news);

      $('.blog-titles__list').on('click', function (e) {
        var index = $(e.target).index();
        var sectionOffset = $news.eq(index).offset().top;
        $(document).off('scroll', scrollPage);
        $('body, html').animate({
          'scrollTop': sectionOffset
        }, function () {
          $(e.target)
            .addClass('blog-titles__active ')
            .siblings().removeClass('blog-titles__active ');

          $(document).on('scroll', scrollPage);
        });
      });

      $(document).on('scroll', scrollPage);
      $(document).on('scroll', scrollPageFixMenu);

      $(window).on('resize', function (e) {
        positionArticle($news);
      });
      // END of blog scripts
    }
};

module.exports = blog;