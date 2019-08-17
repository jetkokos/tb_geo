$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn(1);
	},
	function() {
		$('.description').fadeOut(1);
	}
)

$('.mission').hover (
	function() {
		$('.mission_text').html($(this).attr('mission_text-data'));
		$('.mission_text').fadeIn(1);
	},
	function() {
		$('.mission_text').fadeOut(1);
	}
)