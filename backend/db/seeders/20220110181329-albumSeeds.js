'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Dear Maria Count Me In',
        img: 'https://i.ytimg.com/vi/GcNiKCmWdYE/hq720.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 2,
        title: 'Monsters',
        img: 'https://i.ytimg.com/vi/NlnwXIigAAs/hqdefault.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 3,
        title: 'Once In A Life Time',
        img: 'https://i.ytimg.com/vi/zjl901EhStI/hqdefault.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
