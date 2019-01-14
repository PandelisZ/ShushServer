'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
