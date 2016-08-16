import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('article');
   },
   actions: {
    save3(params) {
      var newRental = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
