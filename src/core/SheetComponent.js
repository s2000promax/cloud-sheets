import { DomListner } from '@core/DomListner';

export class SheetComponent extends DomListner {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // Return template of component
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListners();
  }

  destroy() {
    this.removeDOMListners();
  }
}
