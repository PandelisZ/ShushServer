'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.TEXT,
        primaryKey: true,
        autoIncrement: false
      },
      name: Sequelize.TEXT,
      image: Sequelize.BLOB,
      firebaseId: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
