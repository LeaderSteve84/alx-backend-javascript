export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // setter for sqft attribte
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
