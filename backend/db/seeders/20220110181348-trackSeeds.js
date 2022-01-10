'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tracks', [
      {

        userId: 1,
        albumId: 1,
        title: 'DubStep1',
        audio: 'https://www.bensound.com/royalty-free-music/2#:~:text=00%3A00-,DOWNLOAD,-Slow%20ambient%20cinematic',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        userId: 2,
        albumId: 2,
        title: 'Orchestral',
        audio: 'https://www.bensound.com/royalty-free-music/2#:~:text=00%3A00-,DOWNLOAD,-Epic%20orchestral%20royalty',
        createdAt: new Date(),
        updatedAt: new Date(),

      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
