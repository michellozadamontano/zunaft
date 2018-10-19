/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medios', {
    id_medio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_submayor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'submayor_aft',
        key: 'id_submayor'
      }
    },
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'areas',
        key: 'id_area'
      }
    },
    id_moneda: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'moneda',
        key: 'id_moneda'
      }
    },
    id_subarea: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'subareas',
        key: 'id_subarea'
      }
    }
  }, {
    tableName: 'medios'
  });
};
