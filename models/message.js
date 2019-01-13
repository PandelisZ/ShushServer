'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    payload: DataTypes.BLOB,
    recievedAt: DataTypes.DATE,
    recipient: DataTypes.TEXT
  });

  return Message;
};
