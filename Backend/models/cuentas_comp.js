/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuentas_comp', {
    id_plantilla: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_tipo_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipo_cuenta',
        key: 'id_tipo_cuenta'
      }
    },
    id_tipo_dato: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipo_dato',
        key: 'id_tipo_dato'
      }
    },
    porciento: {
      type: "DOUBLE",
      allowNull: false
    },
    debito: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    aumenta: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cuentas_comp'
  });
};
