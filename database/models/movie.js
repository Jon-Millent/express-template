/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    updata_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'movie'
  });
};
