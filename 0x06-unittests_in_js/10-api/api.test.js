const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return status 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Login endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status 200 and welcome message', (done) => {
    const options = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});


describe('Available payments endpoint', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return status 200 and the correct object', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});
