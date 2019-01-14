'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        autoIncrement: false
      },
      name: DataTypes.TEXT,
      image: DataTypes.BLOB
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
