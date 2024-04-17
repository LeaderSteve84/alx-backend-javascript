import { RowID, RwElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salve',
}

const newRowID: RowID = CRUD,
insertRow(row);
row.age = 23;
const updatdRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
