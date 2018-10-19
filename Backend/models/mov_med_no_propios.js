/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mov_med_no_propios', {
    id_alq_prest: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movimientos',
        key: 'id_movimiento'
      }
    }
  }, {
    tableName: 'mov_med_no_propios'
  });
};
