$( ->
	$rootEl = $('html, body')
	$headerEl = $('#header')
	$homeElHeight = $('#home').outerHeight()

	$('#nav a, .js-link-to').click () ->
		$rootEl.animate(
			scrollTop: $( $(this).attr('href') ).offset().top - 90
			500
		)
		return false

	$(window).on 'scroll', () ->
		if $(window).scrollTop() > 57
			$headerEl.addClass('fixed-nav')
		else
			$headerEl.removeClass('fixed-nav')

		if $(window).scrollTop() > $homeElHeight
			$headerEl.addClass('show-btn')
		else
			$headerEl.removeClass('show-btn')

	$(window).load () ->
		$('#slider').flexslider({
			controlNav: false
			prevText: ''
			nextText: ''
		})
)