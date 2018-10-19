/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syswintr', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    campo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'syswintr'
  });
};
