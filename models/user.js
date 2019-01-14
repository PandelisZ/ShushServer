'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('User', {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      autoIncrement: false
    },
    name: DataTypes.TEXT,
    image: DataTypes.BLOB
  });

  return Message;
};
