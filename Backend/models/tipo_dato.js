/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_dato', {
    id_tipo_dato: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datos: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'tipo_dato'
  });
};
