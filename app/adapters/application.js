import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
	host: "http://localhost:4000",
	headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
  },
	namespace: 'api/v1'
});
export default ApplicationAdapter;


