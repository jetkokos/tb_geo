/* Custom directive for detecting click outside of element */
Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
	};
	document.body.addEventListener('click', this.event)
	},
	unbind: function (el) {
		document.body.removeEventListener('click', this.event)
	},
	});
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		squads: [
			'Sith Empire', 					//0
			'First Order',					//1
			'Bounty Hunters',				//2
			'Emperor Palpatine (zeta)',		//3
			'Night Sisters',				//4
			'Triumvirate',					//5
			'Separatist Droids',			//6
			'Geonosians',					//7
			'Nute Gunray(L) B1 Battle Droid B2 Super Battle Droid Droideka Magnaguard',	//8
			'Dooku(L) + Asajj Ventress'		//9

		],
		enemies: [
			'Mace Windu (anti Jango)',						//0
			'CT-5555 "Fives" (anti Sion, NS, Wat Tambor)',	//1
			'Clone Commander (anti Darth Revan)',			//2
			'Padawan Anakin',								//3
			'ARC Trooper',									//4
			'CT-7567 "Rex"',								//5
			'Shaak-Ti',										//6
			'CC-2224 "Cody"',								//7
			'Ki-Adi Mundi',									//8
			'General Kenobi',								//9
			'Clone Trooper Medic',							//10
			'Padme Amidala',								//11
			'Grand Master Yoda',							//12

		],
		missions: [
			{
			id: 0,
			name: 'c1',
			type: 'usual',
			path: 'media/mission_usual.svg',
			position: 'desc_right',
			preferredSquads: [0,1,2,3],
			dangerousEnemies: [1]
			},
			{id: 1,
			name: 'c2',
			type: 'req',
			path: 'media/mission_req.svg',
			position: 'desc_right',
			preferredSquads: [7],
			dangerousEnemies: [1]
			},
			{id: 2, name: 'c3', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2]},
			{id: 3, name: 'c4', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2]},
			{id: 4, name: 'c5', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',}, 
			{id: 5, name: 'c6', type: 'req', path: 'media/mission_req.svg', position: 'desc_right',}, 
			{id: 6, name: 'c7', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [1, 2, 3, 5],
			dangerousEnemies: [1, 2]},
			{id: 7,
			name: 'c8',
			type: 'req',
			path: 'media/mission_req.svg',
			position: 'desc_right',
			preferredSquads: [9],
			},
			{id: 8, name: 'c9', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [1, 2, 3, 5],
			dangerousEnemies: [1, 2]},
			{id: 9, name: 'c10', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [0, 3, 4, 5, 6],
			dangerousEnemies: [0]},
			{id: 10, name: 'c11', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_right',
			preferredSquads: [0, 3, 4, 5, 6],
			dangerousEnemies: [0]},
			{id: 11, name: 'c12', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',},
			{id: 12, name: 'c13', type: 'req', path: 'media/mission_req.svg', position: 'desc_left',},
			{id: 13, name: 'c14', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [3, 4, 5],
			dangerousEnemies: [2]},
			{id: 14, name: 'c15', type: 'req', path: 'media/mission_req.svg', position: 'desc_left'},
			{id: 15, name: 'c16', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2]},
			{id: 16, name: 'c17', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2]},
			{id: 17, name: 'c18', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left'},
			{id: 18, name: 'c19', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [3, 4, 5, 6, 7],
			dangerousEnemies: []},
			{id: 19, name: 'c20', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [3, 4, 5, 6, 7],
			dangerousEnemies: []},
			{id: 20, name: 'c21', type: 'req', path: 'media/mission_req.svg', position: 'desc_left'},
			{id: 21, name: 'c22', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [0, 1, 2, 3, 5],
			dangerousEnemies: [1]},
			{id: 22, name: 'c23', type: 'usual', path: 'media/mission_usual.svg', position: 'desc_left',
			preferredSquads: [0, 1, 2, 3, 5],
			dangerousEnemies: [1]},
			{id: 23, name: 's1', type: 'special', path: 'media/mission_special.svg', position: 'desc_right', preferredSquads: [8]},
			{id: 24, name: 's2', type: 'special', path: 'media/mission_special.svg', position: 'desc_right'},
			{id: 25, name: 's3', type: 'special', path: 'media/mission_special.svg', position: 'desc_left'},
			{id: 26, name: 's4', type: 'special', path: 'media/mission_special.svg', position: 'desc_left'},
			{id: 27, name: 't1', type: 'platoon', path: 'media/platoon.png', position: 'desc_right'},
			{id: 28, name: 'b1', type: 'platoon', path: 'media/platoon.png', position: 'desc_right'},
			{id: 29, name: 't2', type: 'platoon', path: 'media/platoon.png', position: 'desc_right'},
			{id: 30, name: 'm2', type: 'platoon', path: 'media/platoon.png', position: 'desc_right'},
			{id: 31, name: 'b2', type: 'platoon', path: 'media/platoon.png', position: 'desc_right'},
			{id: 32, name: 't3', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'},
			{id: 33, name: 'm3', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'},
			{id: 34, name: 'b3', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'},
			{id: 35, name: 't4', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'},
			{id: 36, name: 'm4', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'},
			{id: 37, name: 'b4', type: 'platoon', path: 'media/platoon.png', position: 'desc_left'}
		],
		selectedMission: '',
		seen: false,
		hide: function() {
			this.seen = false;
		}
		
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},
		
	}
})




let app = new Vue({
	el: '#app',
	data: {
		
		
		
	},
	
	
	
	
});
