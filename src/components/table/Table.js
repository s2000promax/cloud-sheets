import { SheetComponent } from '@core/SheetComponent';
import { createTable } from '@/components/table/table.template';
import { $ } from '@core/dom';

export class Table extends SheetComponent {
  static className = 'sheet__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const $parent = $resizer.$element.parentNode; // bad!!!
      // const $parent = $resizer.$element.closest('.column'); // bad!!!
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      console.log();

      document.onmousemove = (e) => {
        const deltaX = e.pageX - coords.right;
        const value = coords.width + deltaX;
        $parent.$element.style.width = value + 'px';

        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => el.style.width = value + 'px');
      }

      document.onmouseup = () => {
        document.onmousemove = null;
      }
    }
  }
}
