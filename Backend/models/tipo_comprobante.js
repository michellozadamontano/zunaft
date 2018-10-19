/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_comprobante', {
    id_comp: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_comp: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    desc_comp: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ultimo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tipo_comprobante'
  });
};
