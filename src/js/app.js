(function() {
  $(function() {
    return $('#nav a').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
  });

}).call(this);
