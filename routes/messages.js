var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/send', function(req, res) {
  models.Message.create({
    payload: req.body.payload,
    recieveAt: new Date(),
    recipient: req.body.recipient
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

router.get('/:Recipient_Key', function(req, res) {
  models.Message.findAll({
    where: {
      recipient: req.params.Recipient_key
    }
  }).then(function(message) {
    res.send(messages);
  });
});


module.exports = router;
