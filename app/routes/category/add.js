import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition : function(){
			console.log("didtransition");
			Ember.run.schedule("afterRender",this,function() {
				Materialize.updateTextFields();
			});			
		}
	}
});
