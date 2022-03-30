import {SheetComponent} from '@core/SheetComponent';

export class Formula extends SheetComponent {
  static className = 'sheet__formula';

  toHTML() {
    return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
