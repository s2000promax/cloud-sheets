import { SheetComponent } from '@core/SheetComponent';

export class Formula extends SheetComponent {
  static className = 'sheet__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  toHTML() {
    return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim());
  }
}
