import {SheetComponent} from '@core/SheetComponent';

export class Header extends SheetComponent {
  static className = 'sheet__header';

  toHTML() {
    return `
            <input type="text" class="input" value="New table"/>
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
    `;
  }
}
