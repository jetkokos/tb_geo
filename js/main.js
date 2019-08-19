let app = new Vue({
	el: '#app',
	data: {
		seen: false,
		info: [
			'Sith Empire',
			'First Order',
			'Bounty Hunters'
			
		]
		

	},
	methods: {
		toggle() {
			this.seen = !this.seen;
		}
		
	  
	   
	},

	computed: {
		
	   
	}
	
	
});
