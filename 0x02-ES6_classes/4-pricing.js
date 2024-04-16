import Currency from './3-currency';

// define the pricing class
export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = null;

    this.amount = amount;
    this.currency = currency;
  }

  // getter and setter for amount attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number' && newAmount >= 0) {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a non-negative number');
    }
  }

  // getter and setter for currency attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // method to display full price information
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and conversionRate must be numbers');
  }
}
