var soap = require('soap'),
  mellat = require('./data'),
  _ = require('lodash'),
  moment = require('moment');

module.exports = function (config, payment, callback) {
  var wsdl = mellat.testWsdl;

  soap.createClient(wsdl, function (err, client) {
    if (err) {
      return callback(err);
    }

    var data = _.clone(config);
    data.orderId = payment.id;
    data.amount = payment.amount;
    data.localDate = moment().format('YYYYMMDD');
    data.localTime = moment().format('HHMMSS');
    data.additionalData = payment.additionalData;
    data.callBackUrl = payment.callbackUrl;
    data.payerId = payment.payerId;

    console.log(data);

    client.bpPayRequest(data, function (err, response) {
      if (err) {
        return callback(err);
      }

      callback(null, response);
    });
  });

};