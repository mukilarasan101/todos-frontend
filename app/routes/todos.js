import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		alert("hi");
    	return this.get('store').findAll('todos');
  	}
});
