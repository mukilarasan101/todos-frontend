import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		let category_model = this.modelFor("category");
		var id = category_model.id;
		var categories = this.get('store').findAll('category');
		// return this.get('store').findAll('todo',{adapterOptions: { category_id : id}}).then(function(data){
		// 	return {todos:data , category: category_model};
		// });
		return this.get('store').findAll('todo',{adapterOptions: { category_id : id}, 'reload':true}).then(function(data){
			var data = data.filterBy("category_id.id",id);
			return {todos:data , category: category_model,categories: categories};
		});


		// return Ember.RSVP.hash({
		// 	category: category_model,
		// 	todos: todos
		// });
	},
	actions: {
		didTransition : function(){
			Ember.run.schedule("afterRender",this,function() {
				$('.dropdown-button').dropdown({});
			});			
		}
	}
});
