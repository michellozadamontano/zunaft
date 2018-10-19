/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entidad', {
    id_entidad: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_prov: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'provincias',
        key: 'id_prov'
      }
    },
    direccion_entidad: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    grupo_entidad: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    desc_agencia: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fintur: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'entidad'
  });
};
