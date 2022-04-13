import { SheetComponent } from '@core/SheetComponent';

export class Toolbar extends SheetComponent {
  static className = 'sheet__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
            <div class="button">
                <i class="material-icons">format_align_left</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>

            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>

            <div class="button">
                <i class="material-icons">format_bold</i>
            </div>

            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>

            <div class="button">
                <i class="material-icons">format_underlined</i>
            </div>
    `;
  }

  onClick(event) {
    console.log(event.target);
  }
}
