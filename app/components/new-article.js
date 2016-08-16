import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        category: this.get('category'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('save2', params);
    }
  }
});
