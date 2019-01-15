var models  = require('../models');
var express = require('express');
var router  = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("../firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shush-notifications.firebaseio.com"
});

router.post('/send', function(req, res) {
  models.Message.create({
    payload: req.body.payload,
    recipient: req.body.recipient,
    sender: req.body.sender
  }).then(function() {
    models.User.findOne({
      where: {
        id: req.body.recipient
      }
    })
  }).then(function(user) {
    // See documentation on defining a message payload.

    if(user) {
      var message = {
        data: {
          notification: {
            title: 'New Message',
            body: 'New Message'
          }
        },
        token: registrationToken
      };

      // Send a message to the device corresponding to the provided
      // registration token.
      admin.messaging().send(message)
        .then((response) => {
          res.send({
            status: 'notified'
          });
        })
        .catch((error) => {
          res.send({
            status: 'ok'
          });
        });
    } else {
      res.send({
        status: 'ok'
      });
    }
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
