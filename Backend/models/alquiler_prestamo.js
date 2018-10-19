/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alquiler_prestamo', {
    id_alq_prest: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    propietario: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cant_a_p: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valor_alquiler: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fecha_devolucion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'areas',
        key: 'id_area'
      }
    },
    id_subarea: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'subareas',
        key: 'id_subarea'
      }
    },
    identificador: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'alquiler_prestamo'
  });
};
