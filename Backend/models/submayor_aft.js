/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submayor_aft', {
    id_submayor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_generico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'generico',
        key: 'id_generico'
      }
    },
    consecutivo_submayor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    desc_submayor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_cnmb: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cnmb',
        key: 'id_cnmb'
      }
    }
  }, {
    tableName: 'submayor_aft'
  });
};
