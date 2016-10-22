import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	isdone: DS.attr('boolean'),
	category_id: DS.belongsTo("category")
});
