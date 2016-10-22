import Ember from 'ember';

export default Ember.Controller.extend({
    todoList : function() {
        //var category_id = todo.get("category_id").get("id");
        return this.store.peekRecord('category', this.get('model').category.get('id')).get('todos');
    }.property('model'),
	actions: {
		deleteTodo: function(todo){
			var category_id = todo.get("category_id").get("id");
			todo.destroyRecord({adapterOptions: { category_id : category_id}});
			Materialize.toast('Record Deleted Successfully', 1000); // 1000 is the duration of the toast

		},
		completeTodo: function(todo){
			var category_id = todo.get("category_id").get("id");
			todo.set("isdone",true);
			todo.save({adapterOptions: { category_id : category_id}});
			Materialize.toast('Marked as Completed', 1000); // 1000 is the duration of the toast
		},
		addTodo: function(){
			var category_id = $("#category_id").val();//todo.get("category_id").get("id");
			var title=$("#newTask").val();
			let param={};
        	param.title = title;
        	param.isdone = false;

        	var thisObj = this;
            var post = this.store.createRecord('todo', param);
            post.save({adapterOptions: { category_id : category_id}}).then((savedRecord) => {
                $("#newTask").val("");
                Materialize.toast('Record Added Successfully', 1000); // 1000 is the duration of the toast
            }).catch((xhr) => {
                console.log("error occurred and res status ",xhr);
                    Materialize.toast('An error occurred, Please try again later', 1000); // 1000 is the duration of the toast
            });
		}
	}
});
