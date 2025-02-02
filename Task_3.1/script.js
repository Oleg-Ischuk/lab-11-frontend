class Table {
    constructor(containerId, headers) {
        this.container = document.getElementById(containerId);
        this.table = document.createElement('table');
        this.headers = headers;

        this.tableHead = document.createElement('thead');
        this.tableBody = document.createElement('tbody');
        this.table.appendChild(this.tableHead);
        this.table.appendChild(this.tableBody);

        this.container.appendChild(this.table);
        this.rows = [];

        this.createHeader();
    }

    createHeader() {
        const headerRow = document.createElement('tr');
        this.headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        this.tableHead.appendChild(headerRow);
    }

    addRow(data) {
        const row = document.createElement('tr');
        data.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
        });
        this.tableBody.appendChild(row);
        this.rows.push(row);

        // Add input fields for all columns, including newly added ones
        this.addInputForAllColumns(row);
    }

    addColumn(headerText) {
        // Add new column header
        const th = document.createElement('th');
        th.textContent = headerText;
        this.tableHead.rows[0].appendChild(th);

        // Add input fields for new column in each row
        this.rows.forEach(row => {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введіть дані';

            input.addEventListener('change', () => {
                td.textContent = input.value;
            });

            td.appendChild(input);
            row.appendChild(td);
        });
    }

    addInputForAllColumns(row) {
        // Add input fields for all columns, based on the current number of columns
        const columnsCount = this.tableHead.rows[0].cells.length; 
        for (let i = row.cells.length; i < columnsCount; i++) {
            const td = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Введіть дані';

            input.addEventListener('change', () => {
                td.textContent = input.value;
            });

            td.appendChild(input);
            row.appendChild(td);
        }
    }
}

const table = new Table('table-container', ['Ім\'я', 'Прізвище', 'Вік']);

function addRowWithInput() {
    const rowDataInput = document.getElementById('row-data').value;
    const rowData = rowDataInput.split(',').map(item => item.trim());
    table.addRow(rowData);
    document.getElementById('row-data').value = '';
}

function addColumnWithInput() {
    const columnName = document.getElementById('column-name').value;
    if (columnName) {
        table.addColumn(columnName);
        document.getElementById('column-name').value = '';
    } else {
        alert('Введіть назву стовпця');
    }
}

table.addRow(['Іван', 'Коваленко', 25]);
table.addRow(['Марія', 'Шевченко', 30]);
table.addRow(['Олег', 'Петренко', 22]);
