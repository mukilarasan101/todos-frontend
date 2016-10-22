import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	 buildURL: function(modelName, id, snapshot, requestType, query) {
      var url = this._super();
      var category_id=snapshot.adapterOptions.category_id;
      url=url+"/category/"+category_id+"/todos";
      if(typeof id !== "undefined" && id!==null){
      	url=url+"/"+id;
      }
      return url;
    }

});
