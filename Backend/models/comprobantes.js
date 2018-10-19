/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comprobantes', {
    id_nmro: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    id_comp: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fecha_hasta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_genera: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_identifica: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'comprobantes'
  });
};
