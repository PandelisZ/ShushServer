'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    payload: DataTypes.TEXT,
    recievedAt: DataTypes.DATE,
    sender: DataTypes.TEXT,
    recipient: DataTypes.TEXT
  });

  return Message;
};
