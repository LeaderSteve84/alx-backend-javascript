class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Constructor = Object.getPrototypeOf(this).constructor;
    return new Constructor();
  }
}

export default Car;
