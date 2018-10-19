/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plant_comp', {
    id_plantilla: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipo_mov: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tipo_movimiento',
        key: 'id_tipo_mov'
      }
    },
    descrip: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    almacen: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'plant_comp'
  });
};
