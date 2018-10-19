/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('histmedios', {
    id_mes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    },
    cantidad_mb: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valor_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valor_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    alquiler: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    reparar: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    prestamo: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fecha_adq: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cantidad_ini: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valmn_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depmn_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valdiv_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depdiv_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    inventario: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'histmedios'
  });
};
