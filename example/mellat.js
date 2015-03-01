var Payment = require('./../lib/models/payment'),
  config = {
    terminalId: 123456,
    userName: 'Test',
    userPassword: '123456'
  },
  request = require('./../lib/methods/mellat/request');

var payment = new Payment({
  amount: 1000
});

request(config, payment, function (err, res) {
  if (err) {
    console.error(err);
  }

  console.log(res);
});