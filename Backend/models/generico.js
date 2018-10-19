/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generico', {
    id_generico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo_generico: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    desc_generico: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    id_tasa_deprec: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tasas',
        key: 'id_tasa_deprec'
      }
    },
    transrent: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'generico'
  });
};
