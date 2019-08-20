let app = new Vue({
	el: '#app',
	data: {
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
		fleets: [
			'Chimera',
		],
		

	},
	methods: {
		toggle() {
			this.seen = !this.seen;
		}
		
	  
	   
	},

	computed: {
		
	   
	}
	
	
});
