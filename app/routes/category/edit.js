import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let category_model = this.modelFor("category");
		return category_model;
  	},
  	actions: {
		didTransition : function(){
			console.log("didtransition");
			Ember.run.schedule("afterRender",this,function() {
				Materialize.updateTextFields();
			});			
		}
	}
});
