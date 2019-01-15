var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/send', function(req, res) {
  models.Message.create({
    payload: req.body.payload,
    recipient: req.body.recipient,
    sender: req.body.sender
  }).then(function() {
    res.send({
      status: 'ok'
    });
  });
});

router.delete('/:Message_id/destroy', function(req, res) {
  models.Message.destroy({
    where: {
      id: req.params.Message_id
    }
  }).then(function() {
    res.send({
      status: 'ok'
    });
  });
});

router.post('/', function(req, res) {
  models.Message.findAll({
    where: {
      recipient: req.body.publicKey
    }
  }).then(function(messages) {
    res.send(messages);
  });
});


module.exports = router;
