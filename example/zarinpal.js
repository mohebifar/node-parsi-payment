var express = require('express'),
  app = express(),
  config = {
    merchantId: 'XXXXXX-XXXXX-XXXX'
  },
  zarinpal = require('./../index').ZarinPal();

app.use('/zarinpal', function (req, res) {

});

var server = app.listen(3000);