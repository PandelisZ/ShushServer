var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/register', function(req, res) {
  models.User.create({
    name: req.body.name,
    id: req.body.publicKey,
    firebaseId: req.body.firebaseId
  }).then(function() {
    res.send({
      status: 'ok'
    });
  });
});

router.post('/', function(req, res) {
  models.User.findOne({
    where: {
      id: req.body.publicKey
    }
  }).then(function(user) {
    if(user) {
      res.send(user);
    } else {
      res.status(404)
      res.send({
        status: 'notFound'
      })
    }

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
