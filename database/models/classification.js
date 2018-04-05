/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classification', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '0'
    },
    value: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'classification'
  });
};
