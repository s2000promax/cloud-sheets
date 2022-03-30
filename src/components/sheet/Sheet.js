import {$} from '@core/dom';

export class Sheet {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'sheet');
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$element.append(this.getRoot());
  }
}
