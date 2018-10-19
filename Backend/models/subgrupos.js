/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subgrupos', {
    id_subgrupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subgrupo: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    id_grupo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'grupos',
        key: 'id_grupo'
      }
    },
    descrip: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'subgrupos'
  });
};
