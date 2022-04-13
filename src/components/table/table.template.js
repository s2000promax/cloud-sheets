const CODES = {
  A: 65, Z: 90
}

const toCell = (_, col) => {
  return (`<div class="cell" data-col="${col}" contenteditable></div>`);
}

const toColumn = (col, index) => {
  return (`<div class="column" data-type="resizable" data-col="${index}">
        ${col}
        <div class="col-resize" data-resize="col"></div>
     </div>`);
}

const createRow = (index, content) => {
  const resize = index ? `<div 
                            class="row-resize" 
                            data-resize="row"
                          >
                          </div>` : '';
  return (`<div class="row">
        <div class="row-info">
            ${index ? index : ''}
            ${resize}
        </div>
        <div class="row-data">${content}</div>
     </div>`);
}

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

export const createTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let index = 0; index < rowsCount; index += 1) {
    const cell = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(index + 1, cell))
  }


  return rows.join('');
}
