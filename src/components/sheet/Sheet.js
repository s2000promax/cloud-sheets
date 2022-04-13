import { $ } from '@core/dom';

export class Sheet {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'sheet');
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // DEBUG
      /*
      if (component.name) {
        window['c' + component.name] = component;
      }
       */
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$element.append(this.getRoot());

    this.components.forEach(component => component.init())
  }
}
