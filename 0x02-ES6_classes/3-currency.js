export default class Currency {
  constructor(code, name) {
    // initialize private attributes with default values
    this._code = '';
    this._code = '';

    // set attributes using setters to perform type validation
    this.code = code;
    this.name = name;
  }

  // getter and setters for the code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  // getter abd setter for name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // method to display currency information in a specific format
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
