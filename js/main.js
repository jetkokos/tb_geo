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

$('.special_mission').hover (
	function() {
		$('.special_mission_text').html($(this).attr('special_mission-data'));
		$('.special_mission_text').fadeIn(1);
	},
	function() {
		$('.special_mission_text').fadeOut(1);
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