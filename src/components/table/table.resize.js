import { $ } from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  // const $parent = $resizer.$element.parentNode; // bad!!!
  // const $parent = $resizer.$element.closest('.column'); // bad!!!
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const sideProp = type === 'col' ? 'bottom' : 'right';
  let value;

  $resizer.css({
    opacity: 1,
    zIndex: 1000,
    [sideProp]: '-5000px'
  });

  document.onmousemove = (e) => {
    if (type === 'col') {
      const deltaX = e.pageX - coords.right;
      value = coords.width + deltaX;
      $resizer.css({ right: -deltaX + 'px' });
    } else if (type === 'row') {
      const deltaY = e.pageY - coords.bottom;
      value = coords.height + deltaY;
      $resizer.css({ bottom: -deltaY + 'px' })
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'col') {
      $parent.css({
        width: value + 'px'
      });
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px');
    } else if (type === 'row') {
      $parent.css({
        height: value + 'px'
      });
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    })
  }
}
