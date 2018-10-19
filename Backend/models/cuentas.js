/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuentas', {
    id_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_cuentaZUN: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_tipo_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tipo_cuenta',
        key: 'id_tipo_cuenta'
      }
    },
    id_moneda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'moneda',
        key: 'id_moneda'
      }
    },
    activa: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    predeterminada: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'cuentas'
  });
};
