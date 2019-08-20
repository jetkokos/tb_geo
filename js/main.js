Vue.component('mission', {
	template: `
		<div>
			<img @click='seen = !seen' class='mission c1' src='media/mission_usual.svg' alt=''>
			<div v-show='seen' class='info'>
				<p class='h4'>Preferred combat mission teams</p>
				<p>{{squads[0]}}</p>
				<p>{{squads[1]}}</p>
				<p>{{squads[2]}}</p>
				<p>{{squads[3]}}</p>
				<p class='h4'>Dangerous enemies</p>
				<p>25% Mace (anti Jango)</p>
				<p>25% Fives (anti Sion, NS, Wat Tambor)</p>
			</div>
		</div>
	`,
	data: function () {
	  return {
		seen: false,
		squads: [
			'Sith Empire',
			'First Order',
			'Bounty Hunters',
			'Emperor Palpatine (zeta)',
			'Night Sisters',
			'Triumvirate',
			'Separatist Droids',
			'Geonosians'			
		],
		missions: [
			'c1',
		]
	  };
	}
});

let app = new Vue({
	el: '#app',
});
