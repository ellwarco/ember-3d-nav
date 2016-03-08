import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  navIsVisible: false,
  selectedIndex: 0,
  toggle3dBlock() {
    let addOrRemove = this.get('navIsVisible');
    $('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
      //fix marker position when opening the menu (after a window resize)
      addOrRemove && this.updateSelectedNav();
    });
  },
  /**
   * This function updates the .nav-marker position
   *
   * @param type Whether it is a close or not
   */
  updateSelectedNav(type) {
    const selectedItem = $('.is-selected');
    const leftPosition = selectedItem.offset().left;
    const marker = $('.nav-marker');

    marker.css({
      'left': leftPosition
    });
    if (type == 'close') {
      marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
        this.set('navIsVisible', false);
        this.toggle3dBlock();
      });
    }
  }
});