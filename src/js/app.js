(function() {
  $(function() {
    var $headerEl, $rootEl;
    $rootEl = $('html, body');
    $headerEl = $('#header');
    $('#nav a').click(function() {
      $rootEl.animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
      }, 500);
      return false;
    });
    return $(window).scroll(function() {
      if ($(window).scrollTop() > 57) {
        $headerEl.addClass('fixed-nav');
      } else {
        $headerEl.removeClass('fixed-nav');
      }
      if ($(window).scrollTop() > 570) {
        return $headerEl.addClass('show-btn');
      } else {
        return $headerEl.removeClass('show-btn');
      }
    });
  });

}).call(this);
