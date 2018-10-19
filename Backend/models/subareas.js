/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subareas', {
    id_subarea: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_subarea: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'areas',
        key: 'id_area'
      }
    },
    responsable: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    eliminada: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'subareas'
  });
};
