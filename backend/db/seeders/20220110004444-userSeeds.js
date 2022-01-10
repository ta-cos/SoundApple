'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {

        userName: 'Batman',
        email: 'myemail@me.com',
        hashedPassword: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
