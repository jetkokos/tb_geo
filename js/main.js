Vue.component('mission', {
	template: `
		<div>
				<img src="media/mission_usual.svg">
		</div>
	`,
	data: function () {
	  return {
	  };
	}
});
Vue.component('mission_special', {
	template: `
		<div>
			<img src="media/mission_special.svg">
		</div>
	`,
	data: function () {
	  return {
	  };
	}
});
Vue.component('mission_req', {
	template: `
		<div>
			<img src="media/mission_req.svg">
		</div>
	`,
	data: function () {
	  return {
	  };
	}
});
Vue.component('squad_fill', {
	template: `
		<div>
			<img src="media/squad.png">
		</div>
	`,
	data: function () {
	  return {
	  };
	}
});

let app = new Vue({
	el: '#app',
	data: {
		missions: [
			{id: 0, name: 'c1'},
			{id: 1, name: 'c3'},
			{id: 2, name: 'c4'},
			{id: 3, name: 'c5'},
			{id: 4, name: 'c7'},
			{id: 5, name: 'c9'},
			{id: 6, name: 'c10'},
			{id: 7, name: 'c11'},
			{id: 8, name: 'c12'},
			{id: 9, name: 'c14'},
			{id: 10, name: 'c16'},
			{id: 11, name: 'c17'},
			{id: 12, name: 'c18'},
			{id: 14, name: 'c19'},
			{id: 15, name: 'c20'},
			{id: 16, name: 'c22'},
			{id: 17, name: 'c23'},
		],
		missions_req: [
			{id: 0, name: 'c2'},
			{id: 1, name: 'c6'},
			{id: 2, name: 'c8'},
			{id: 3, name: 'c13'},
			{id: 4, name: 'c15'},
			{id: 5, name: 'c21'},
		],
		missions_special: [
			{id: 0, name: 's1'},
			{id: 1, name: 's2'},
			{id: 2, name: 's3'},
			{id: 3, name: 's4'},
		],
		squad_fills: [
			{id: 0, name: 't1'},
			{id: 1, name: 'b1'},
			{id: 2, name: 't2'},
			{id: 3, name: 'm2'},
			{id: 4, name: 'b2'},
			{id: 5, name: 't3'},
			{id: 6, name: 'm3'},
			{id: 7, name: 'b3'},
			{id: 8, name: 't4'},
			{id: 9, name: 'm4'},
			{id: 10, name: 'b4'},
		],
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
		images: [
			'mission_usual.svg',
			'mission_special.svg',
			'mission_special.svg'
		]
	}
});
