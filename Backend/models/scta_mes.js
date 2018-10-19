/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scta_mes', {
    id_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cuentas',
        key: 'id_cuenta'
      }
    },
    id_cuentadep: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cuentas',
        key: 'id_cuenta'
      }
    },
    mes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    cantidad_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valor_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dep_a_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cantidad_div: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valor_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dep_a_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'scta_mes'
  });
};
