'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tracks', [
      {

        userId: 1,
        albumId: 1,
        title: 'Dear Maria',
        audio: 'https://res.cloudinary.com/dzmdi0dms/video/upload/v1642026178/music/All_Time_Low_-_Dear_Maria_Count_Me_In_Official_Music_Video_mc7bof.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {

        userId: 2,
        albumId: 2,
        title: 'Orchestral',
        audio: 'https://res.cloudinary.com/dzmdi0dms/video/upload/v1642026888/music/All_Time_Low_-_Monsters_feat._Demi_Lovato_and_blackbear_LYRIC_VIDEO_xfmdpc.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userId: 3,
        albumId: 3,
        title: 'Once in a lifetime',
        audio: 'https://res.cloudinary.com/dzmdi0dms/video/upload/v1642027120/music/All_Time_Low_-_Once_In_A_Lifetime_OFFICIAL_VIDEO_re2bi1.mp3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users');
  }
};
