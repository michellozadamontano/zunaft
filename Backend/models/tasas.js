/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasas', {
    id_tasa_deprec: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_grupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'grupos',
        key: 'id_grupo'
      }
    },
    tasa: {
      type: "DOUBLE",
      allowNull: false
    },
    desc_grupo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cod_tasa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    porciento_rep_cap: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tasas'
  });
};
