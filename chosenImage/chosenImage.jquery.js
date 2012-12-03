;;(function($) {

	$.fn.chosenImage = function(options) {

		return this.each(function() {

			var $select = $(this);

			// 1. Retrieve img-src from data attribute and set as background image using style attr.
			$select.find('option').each(function() {
				if($(this).attr('data-img-src')) {
					var imgSrc = $(this).attr('data-img-src');
					$(this).css(cssObj(imgSrc));
				}
			});


			// 2. Execute chosen plugin
			$select.chosen(options);


			// 3. Change chosen selected element when form changes
			var  chzn	   = '#' + $select.attr('id') + '_chzn',
				$chzn      = $(chzn).addClass('chznImage-container');

			$select.change(function() {
				var imgSrc = ($select.find('option:selected').attr('data-img-src')) 
								? $select.find('option:selected').attr('data-img-src') : '';
				$chzn.find('.chzn-single span').css(cssObj(imgSrc));
			});

			$select.trigger('change');


			// Utilties
			function cssObj(imgSrc) {
				if(imgSrc) {
					return {
						'background-image': 'url(' + imgSrc + ')',
						'background-repeat': 'no-repeat'
					}
				} else {
					return {
						'background-image': 'none'
					}
				}
			}
		});
	}

})(jQuery);