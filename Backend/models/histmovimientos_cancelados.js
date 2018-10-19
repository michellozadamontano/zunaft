/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('histmovimientos_cancelados', {
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    importe_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    importe_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depreciacion_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depreciacion_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_submayor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'submayor_aft',
        key: 'id_submayor'
      }
    },
    inventario: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'histmovimientos_cancelados'
  });
};
