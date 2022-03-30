import {SheetComponent} from '@core/SheetComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends SheetComponent {
  static className = 'sheet__table';

  toHTML() {
    return createTable(20);
  }
}
