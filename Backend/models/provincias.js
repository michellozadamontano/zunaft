/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincias', {
    id_prov: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_prov: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'provincias'
  });
};
