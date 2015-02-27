var ZarinPal = require('./src/zarinpal');

module.exports = {
  zarinpal: function (config) {
    return ZarinPal(config);
  }
};