/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scta_extractocontable', {
    id_nmro: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    id_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cuentas',
        key: 'id_cuenta'
      }
    },
    id_moneda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'moneda',
        key: 'id_moneda'
      }
    },
    Debito: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Credito: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Saldo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'scta_extractocontable'
  });
};
