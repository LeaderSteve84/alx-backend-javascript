import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // getter for range attribute
  get range() {
    return this._range;
  }

  // Override cloneCar method to return an instance of Car
  /* eslint-disable class-methods-use-this */
  cloneCar() {
    // const { _brand, _motor, _color } = this;
    return new Car();
    // _brand, _motor, _color);
  }
}

export default EVCar;
