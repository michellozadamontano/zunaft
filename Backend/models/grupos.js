/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupos', {
    id_grupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    grupo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    descrip: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'grupos'
  });
};
