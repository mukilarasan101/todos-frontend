import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories',{"path": "/"});

  this.route('category.add', {"path" : "/category/add"});
  this.route('category',{"path" : "/category/:category_id"} ,function() {
    this.route('index',{"path" : "/"});
    this.route('todos',{"path" : "/todos"});
    this.route('edit', {"path" : "/edit"});
  });
});

export default Router;
