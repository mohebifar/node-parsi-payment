var Payment = function Payment(data) {
  this.id = data.id || 0;

  this.amount = data.amount || 0;

  this.additionalData = data.additionalData || '';

  this.callbackUrl = data.callbackUrl || 'http://www.example.com/verify';

  this.payerId = data.payerId || 0;
};

Payment.prototype.toObject = function () {
  var _this = this;

  return {
    id: _this.id,
    amount: _this.amount,
    additionalData: _this.additionalData,
    callbackUrl: _this.callbackUrl,
    payerId: _this.payerId
  };
};

module.exports = Payment;