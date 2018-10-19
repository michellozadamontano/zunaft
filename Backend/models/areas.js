/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areas', {
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_area: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    id_ccostoZUN: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    responsable: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    almacen: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    id_tipo_ci: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tipo_control_inventario',
        key: 'id_tipo_ci'
      }
    },
    eliminada: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'areas'
  });
};
