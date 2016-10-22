import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
	},
	actions: {
        saveRecords() {
        	let title = $("#title").val();
        	let desc = $("#descriptionArea").val();
        	let param={};
        	param.title = title;
        	param.description = desc;
            var post = this.store.createRecord('category', param);
            var thisObj = this;
            post.save().then((savedRecord) => {
                Materialize.toast('Category Added Successfully', 4000); // 4000 is the duration of the toast
                thisObj.transitionToRoute('categories');
            }).catch((xhr) => {
                console.log("error occurred and res status ", xhr);
                Materialize.toast('An error occurred, Please try again later', 4000); // 4000 is the duration of the toast
            });
    		// var slf = this;
      //   	$.ajax({
      //   		type: "POST", 
    		// 	url: "/api/v1/category",
    		// 	data: param,
    		// 	success: function(savedRecord) { 
      //             	//slf.store.createRecord('category', savedRecord.category);
      //               Materialize.toast('Category Added Successfully', 4000); // 4000 is the duration of the toast
    		// 		slf.transitionToRoute('categories');
    		// 	},
    		// 	error: function(xhr){
    		// 		console.log("error occurred and res status "+xhr.status);
    		// 		Materialize.toast('An error occurred, Please try again later', 4000); // 4000 is the duration of the toast
    		// 	}
    		// });
        },
        resetData(){
    	   $("#title").val("");
    		$("#descriptionArea").val("");
        }
    }
});