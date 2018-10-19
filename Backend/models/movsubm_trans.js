/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movsubm_trans', {
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_inventario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'inventario',
        key: 'id_inventario'
      }
    },
    kms: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depmovMN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depmovDiv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'movsubm_trans'
  });
};
