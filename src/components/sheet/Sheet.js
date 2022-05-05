import { $ } from '@core/dom';
import { Emitter } from '@core/Emitter';

export class Sheet {
  constructor(selector, options) {
    this.$element = $(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
  }

  getRoot() {
    const $root = $.create('div', 'sheet');

    const componentOptions = {
      emitter: this.emitter
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, componentOptions);
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

  destroy() {
    this.components.forEach(component => component.destroy());
  }
}
