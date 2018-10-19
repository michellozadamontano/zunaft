/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cnmb', {
    id_cnmb: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cnmb: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    activo: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    descrip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_subgrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'subgrupos',
        key: 'id_subgrupo'
      }
    }
  }, {
    tableName: 'cnmb'
  });
};
