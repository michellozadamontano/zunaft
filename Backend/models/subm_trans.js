/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subm_trans', {
    id_inventario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    maxdepanualMN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    maxdepanualDiv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tasa: {
      type: "DOUBLE",
      allowNull: false
    },
    id_gasto: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    depanualMN: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depanualDiv: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'subm_trans'
  });
};
