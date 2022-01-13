'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {

        username: 'Batman',
        email: 'myemail@me.com',
        hashedPassword: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        username: 'Spiderman',
        email: 'spider@me.com',
        hashedPassword: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        username: 'Demo',
        email: 'demo@demo.com',
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
