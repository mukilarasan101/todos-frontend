import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	return this.get('store').findAll('category');
	},
	actions: {
		didTransition : function(){
			console.log("didtransition");
			Ember.run.schedule("afterRender",this,function() {
				$('.tooltipped').tooltip({delay: 50});
			});			
		}
	}
});
