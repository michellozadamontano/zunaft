/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mov_mediospropios', {
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_medio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'medios',
        key: 'id_medio'
      }
    },
    id_mediodest: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'medios',
        key: 'id_medio'
      }
    }
  }, {
    tableName: 'mov_mediospropios'
  });
};
