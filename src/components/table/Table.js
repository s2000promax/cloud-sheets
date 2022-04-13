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
      const type = $resizer.data.resize;
      console.log(type)

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

      document.onmousemove = (e) => {
        if (type === 'col') {
          const deltaX = e.pageX - coords.right;
          const value = coords.width + deltaX;
          $parent.css({
            width: value + 'px'
          });

          cells.forEach(el => el.style.width = value + 'px');
        } else if (type === 'row') {
          const deltaY = e.pageY - coords.bottom;
          const value = coords.height + deltaY;
          $parent.css({
            height: value + 'px'
          });
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null;
      }
    }
  }
}
