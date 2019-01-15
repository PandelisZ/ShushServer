'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      autoIncrement: false,
    },
    name: DataTypes.TEXT,
    image: DataTypes.BLOB,
    firebaseId: DataTypes.STRING
  });

  return User;
};
