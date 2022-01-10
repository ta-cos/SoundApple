'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Dont Panic: Its Longer Now',
        img: 'https://www.rocksound.tv/assets/uploads/dontpanicitslongernow.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 2,
        title: 'Wake Up Sunshine',
        img: 'https://i0.wp.com/www.rocksins.com/wp-content/uploads/2020/04/All-Time-Low-Wake-Up-Sunshine-Album-Cover.jpg?fit=960%2C960&ssl=1',
        createdAt: new Date(),
        updatedAt: new Date(),

      },


    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
