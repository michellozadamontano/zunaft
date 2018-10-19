/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_control_inventario', {
    id_tipo_ci: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_tipo_ci: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    tableName: 'tipo_control_inventario'
  });
};
