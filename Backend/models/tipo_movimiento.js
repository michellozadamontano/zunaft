/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_movimiento', {
    id_tipo_mov: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_mov: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ult_mov: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    comprobante: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    id_plantilla: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'plant_comp',
        key: 'id_plantilla'
      }
    }
  }, {
    tableName: 'tipo_movimiento'
  });
};
