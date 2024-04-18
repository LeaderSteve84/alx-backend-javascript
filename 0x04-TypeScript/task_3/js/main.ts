import { RowID, RowElement } from './interface'; // Importing RowID and RowElement from './inteface'
import CRUD from './crud'; // Importing CRUD from './crud'

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salve',
};

const newRowID: RowID = CRUD.insertRow(row); // Attempting to assigned the result of CRUD.insertRow(row) to newRowID
row.age = 23; // Modifying the age property of the row object
const updatdRow: RowElement = row; // Assigning the modified row object to updatedRow

CRUD.updateRow(newRowID, updatedRow); // Calling CRUD.updateRow with newRowID and updatedRow
CRUD.deleteRow(newRowID); // Calling CRUD,deleteRow with newRowID
