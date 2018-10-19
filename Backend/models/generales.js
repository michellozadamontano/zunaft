/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generales', {
    cierre_inv: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'generales'
  });
};
