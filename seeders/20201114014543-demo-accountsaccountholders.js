'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AccountsAccountHolders', [
      {
        id: 1,
        accountId: 1,
        accountHolderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        accountId: 1,
        accountHolderId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        accountId: 2,
        accountHolderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        accountId: 3,
        accountHolderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        accountId: 3,
        accountHolderId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccountsAccountHolders', null, {});
  }
};
