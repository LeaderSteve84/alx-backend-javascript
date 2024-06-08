// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and two numbers', () => {
    // creating a spy on utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Expect the spy to have been called with the correct arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // restore the original function after testing
    calculateNumberSpy.restore();
  });

  it('should log the correct sum to the console', () => {
    // Stub console.log to check its output
    const logStub = sinon.stub(console, 'log');

    // call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Expect console.log to be called with the correct message
    expect(logStub.calledOnce).to.be.true;
    expect(logStub.firstCall.args[0]).to.equal('The total is: 120');

    // Restore the original function after testing
    logStub.restore();
  });
});
