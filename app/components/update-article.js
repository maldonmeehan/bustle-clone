import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
    actions: {
      updateArticleForm() {
        this.set('updateArticleForm', true);
      },
      update(article) {
        var params = {
          author: this.get('author'),
          title: this.get('title'),
          category: this.get('category'),
          image: this.get('image'),
        };
        this.set('updateArticleForm', false);
        this.sendAction('update', article, params);
      }
    }
  });
