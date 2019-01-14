var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/register', function(req, res) {
  models.User.create({
    payload: req.body.payload,
    recipient: req.body.recipient,
    sender: req.body.sender
  }).then(function() {
    res.send({
      status: 'ok'
    });
  });
});

router.put('/', function(req, res) {
  models.User.findOne({
    where: {
      id: req.body.publicKey
    }
  }).then(function(user) {
      user.update({
          name: req.params.name
      })
  }).then(function(message) {
    res.send(messages);
  });
});


module.exports = router;
