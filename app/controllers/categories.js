import Ember from 'ember';

var customConT = Ember.Controller.extend({

	test:function(){
		console.log("observes categories");
	}.observes("model"),
  actions: {
    showDeleteAlert:function(category){
      let id = "#modal_"+category.id;
      $(id).openModal();
    },
    deleteRecord:function(category){
      category.destroyRecord();
      Materialize.toast('Category Deleted Successfully', 4000); // 4000 is the duration of the toast
    }
  }
});

export default customConT;