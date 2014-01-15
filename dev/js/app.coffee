$( ->
	$rootEl = $('html, body')
	$headerEl = $('#header')

	$('#nav a').click () ->
		$rootEl.animate(
			scrollTop: $( $(this).attr('href') ).offset().top - 90
			500
		)
		return false

	$(window).scroll () ->
		if $(window).scrollTop() > 57
			$headerEl.addClass('fixed-nav')
		else
			$headerEl.removeClass('fixed-nav')

		if $(window).scrollTop() > 570
			$headerEl.addClass('show-btn')
		else
			$headerEl.removeClass('show-btn')
)