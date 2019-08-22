Vue.component('mission', {
	template: `
			<img class="mission">
	`,
	data: function () {
	  return {
	  };
	}
});


let app = new Vue({
	el: '#app',
	data: {
		currentMission: '',
		missions: [
			{id: 0, name: 'c1', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 1, name: 'c2', type: 'req', path: 'media/mission_req.svg'},
			{id: 2, name: 'c3', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 3, name: 'c4', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 4, name: 'c5', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 5, name: 'c6', type: 'req', path: 'media/mission_req.svg'}, 
			{id: 6, name: 'c7', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 7, name: 'c8', type: 'req', path: 'media/mission_req.svg'},
			{id: 8, name: 'c9', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 9, name: 'c10', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 10, name: 'c11', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 11, name: 'c12', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 12, name: 'c13', type: 'req', path: 'media/mission_req.svg'},
			{id: 13, name: 'c14', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 14, name: 'c15', type: 'req', path: 'media/mission_req.svg'},
			{id: 15, name: 'c16', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 16, name: 'c17', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 17, name: 'c18', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 18, name: 'c19', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 19, name: 'c20', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 20, name: 'c21', type: 'req', path: 'media/mission_req.svg'},
			{id: 21, name: 'c22', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 22, name: 'c23', type: 'usual', path: 'media/mission_usual.svg'},
			{id: 23, name: 's1', type: 'special', path: 'media/mission_special.svg'},
			{id: 24, name: 's2', type: 'special', path: 'media/mission_special.svg'},
			{id: 25, name: 's3', type: 'special', path: 'media/mission_special.svg'},
			{id: 26, name: 's4', type: 'special', path: 'media/mission_special.svg'},
			{id: 27, name: 't1', type: 'platoon', path: 'media/platoon.png'},
			{id: 28, name: 'b1', type: 'platoon', path: 'media/platoon.png'},
			{id: 29, name: 't2', type: 'platoon', path: 'media/platoon.png'},
			{id: 30, name: 'm2', type: 'platoon', path: 'media/platoon.png'},
			{id: 31, name: 'b2', type: 'platoon', path: 'media/platoon.png'},
			{id: 32, name: 't3', type: 'platoon', path: 'media/platoon.png'},
			{id: 33, name: 'm3', type: 'platoon', path: 'media/platoon.png'},
			{id: 34, name: 'b3', type: 'platoon', path: 'media/platoon.png'},
			{id: 35, name: 't4', type: 'platoon', path: 'media/platoon.png'},
			{id: 36, name: 'm4', type: 'platoon', path: 'media/platoon.png'},
			{id: 37, name: 'b4', type: 'platoon', path: 'media/platoon.png'}
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
		
	}
});
