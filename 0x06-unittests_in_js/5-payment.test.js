// 5-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');


describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('Should call Utils.calculateNumber with SUM and two numbers', () => {
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct sum to the console', () => {
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 10');
  });
  
  it('handles a negative totalAmount', () => {
    calculateNumberStub.returns(-80);
    sendPaymentRequestToApi(-100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.firstCall.args[0]).to.equal('The total is: -80');
  });

  it('handle an error in calculateNumber', () => {
    calculateNumberStub.throws(new Error('Test error'));

    expect(() => sendPaymentRequestToApi(100, 20)).to.throw('Test error');
  });
});
