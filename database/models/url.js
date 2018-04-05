/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('url', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    url_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER(11),
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
    }
  }, {
    tableName: 'url'
  });
};
