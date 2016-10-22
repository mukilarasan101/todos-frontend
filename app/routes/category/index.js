import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var id = this.modelFor("category").id;
    	return this.get('store').findRecord('category',id);
  	}

});
