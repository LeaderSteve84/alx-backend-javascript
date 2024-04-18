import { RowID, RowElement } from './interface'; // Importing types RowID and RowElement from './interface'

// Declaration of insertRow function with a parameter of type RowElement and a return type of number
declare function insertRow(row: RowElement) : number;

// Declaration of deleteRow function with a parameter of type RowID and a return type of undefined
declare function deleteRow(rowId: RowID): undefined;

// Declaration of updateRow function with parameters of type RowID and RowElement, and a return type of number
declare function updateRow(rowId: RowID, row: RowElement): number;
