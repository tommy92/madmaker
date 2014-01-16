(function() {
  $(function() {
    var $headerEl, $homeElHeight, $rootEl;
    $rootEl = $('html, body');
    $headerEl = $('#header');
    $homeElHeight = $('#home').outerHeight();
    $('#nav a, .js-link-to').click(function() {
      $rootEl.animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
      }, 500);
      return false;
    });
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 57) {
        $headerEl.addClass('fixed-nav');
      } else {
        $headerEl.removeClass('fixed-nav');
      }
      if ($(window).scrollTop() > $homeElHeight) {
        return $headerEl.addClass('show-btn');
      } else {
        return $headerEl.removeClass('show-btn');
      }
    });
    return $(window).load(function() {
      return $('#slider').flexslider({
        controlNav: false,
        prevText: '',
        nextText: ''
      });
    });
  });

}).call(this);
