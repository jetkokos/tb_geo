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
		$('.mission_text').html($(this).attr('mission-data'));
		$('.mission_text').fadeIn(1);
	},
	function() {
		$('.mission_text').fadeOut(1);
	}
)

$('.mission_with_reqs').hover (
	function() {
		$('.mission_with_reqs_text').html($(this).attr('mission_with_reqs-data'));
		$('.mission_with_reqs_text').fadeIn(1);
	},
	function() {
		$('.mission_with_reqs_text').fadeOut(1);
	}
)

$('.mission_special').hover (
	function() {
		$('.mission_special_text').html($(this).attr('mission_special-data'));
		$('.mission_special_text').fadeIn(1);
	},
	function() {
		$('.mission_special_text').fadeOut(1);
	}
)

$('.squad').hover (
	function() {
		$('.squad_text').html($(this).attr('squad-data'));
		$('.squad_text').fadeIn(1);
	},
	function() {
		$('.squad_text').fadeOut(1);
	}
)