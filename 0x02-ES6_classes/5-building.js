export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
