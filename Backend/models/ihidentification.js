/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihidentification', {
    id_modulo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'ihidentification'
  });
};
