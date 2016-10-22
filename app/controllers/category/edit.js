import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRecords() {
    	let category_id = $("#category_id").val();
    	let title = $("#title").val();
    	let desc = $("#descriptionArea").val();
    	let rec = this.store.findRecord('category', category_id);
    	let slf= this;
		rec.then(function(category) {
		 	category.set('title', title);
		 	category.set('description', desc);
		 	category.save();
            Materialize.toast('Category Modified Successfully', 4000); // 4000 is the duration of the toast
		 	slf.transitionToRoute('categories');
		 });
    },
    resetData(){
    	let category_id = $("#category_id").val();
    	let rec = this.store.findRecord('category', category_id);
    	rec.then(function(category) {
		 	let title = category.get('title');
		 	let desc = category.get('description');
		 	$("#title").val(title);
		 	$("#descriptionArea").val(desc);
		 });
    }
  }
});
