import Ember from 'ember';
import layout from './template';
const {Component} = Ember;

export default Component.extend({
  layout,
  classNameBindings: [':nav-trigger'],
  tagName: 'span',
  click() {
    this.sendAction('onClickAction');
  }
});
