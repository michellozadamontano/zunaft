/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('depreciacion', {
    id_depre: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'depreciacion'
  });
};
