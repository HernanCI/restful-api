'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [
      {
        id: 1,
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        balance: 9000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        balance: 12000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccountHolders', null, {});
  }
};
