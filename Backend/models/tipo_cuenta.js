/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_cuenta', {
    id_tipo_cuenta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    desc_tipo_cuenta: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    tableName: 'tipo_cuenta'
  });
};
