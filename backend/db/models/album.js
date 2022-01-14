'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.TEXT, allowNull: false, defaultValue: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coming-soon%2Creopening%2C-event%2Cretail%2Csale-design-template-b544a521018aa1da2ec12c777156eeeb_screen.jpg?ts=1596359417' },
  }, {});
  Album.associate = function (models) {
    Album.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Album;
};
