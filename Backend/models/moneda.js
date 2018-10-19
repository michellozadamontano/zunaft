/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moneda', {
    id_moneda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_moneda: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'moneda'
  });
};
