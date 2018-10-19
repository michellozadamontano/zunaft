/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('histmovimientos', {
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'areas',
        key: 'id_area'
      }
    },
    id_area_anterior: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    id_subarea_anterior: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'subareas',
        key: 'id_subarea'
      }
    },
    id_tipo_mov: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tipo_movimiento',
        key: 'id_tipo_mov'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cantidad_mov: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    num_documento: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    num_fact: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submayor: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cuentamn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cuentadiv: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    provmn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provdiv: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'histmovimientos'
  });
};
