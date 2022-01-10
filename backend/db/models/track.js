'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    audio: DataTypes.TEXT
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.belongsTo(models.Album, {foreignKey: 'albumId'})
    Track.belongsTo(models.User, {foreignKey: 'userId'})

  };
  return Track;
};
