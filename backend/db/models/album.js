'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.TEXT, allowNull: false },
  }, {});
  Album.associate = function (models) {
    Album.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Album;
};
