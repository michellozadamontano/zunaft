/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compmov', {
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nmro: {
      type: DataTypes.STRING(10),
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
    id_grupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'grupos',
        key: 'id_grupo'
      }
    },
    debito: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    credito: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    saldo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    enlazado: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    compZUN: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'compmov'
  });
};
