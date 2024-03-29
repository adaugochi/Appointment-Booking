(function ($) {
	$.fn.nameBadge = function (options) {
		var settings = $.extend({
			border: {
				color: '#ddd',
				width: 3
			},
			colors: ['#3490dc'],
			text: '#fff',
			size: 0,
			margin: 5,
			middlename: true,
			uppercase: false
		}, options);
		return this.each(function () {
			var elementText = $(this).text();
			var initialLetters = elementText.match(settings.middlename ? /\b(\w)/g : /^\w|\b\w(?=\S+$)/g);
			var initials = initialLetters.join('');
			$(this).text(initials);
			$(this).css({
				'color': settings.text,
				'background-color': settings.colors[Math.floor(Math.random() * settings.colors.length)],
				'border': settings.border.width + 'px solid ' + settings.border.color,
				'display': 'inline-block',
				'font-family': 'Arial, \'Helvetica Neue\', Helvetica, sans-serif',
				'font-size': settings.size * 0.4,
				'border-radius': '4px',
				'width': settings.size + 'px',
				'height': settings.size + 'px',
				'line-height': settings.size + 'px',
				'text-align': 'center',
				'text-transform' : settings.uppercase ? 'uppercase' : ''
			});
		});
	};
}(jQuery));
