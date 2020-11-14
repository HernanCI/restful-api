'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AccountHolders', [
      {
        id: 1,
        name: 'Hernan Castro',
        email: 'hernan.castro@uabc.edu.mx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Pablo Guzman',
        email: 'pguzman98@uabc.edu.mx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Billy Joel',
        email: 'BillyJ@uabc.edu.mx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
