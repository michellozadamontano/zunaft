/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invent_mov_mediospropios', {
    id_medio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'medios',
        key: 'id_medio'
      }
    },
    id_movimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movimientos',
        key: 'id_movimiento'
      }
    },
    id_inventario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'inventario',
        key: 'id_inventario'
      }
    },
    destino: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    id_moneda_anterior: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_moneda_actual: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_generico_anterior: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'generico',
        key: 'id_generico'
      }
    },
    id_generico_actual: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'generico',
        key: 'id_generico'
      }
    },
    valor_mn_anterior: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valor_mn_actual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valor_div_anterior: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valor_div_actual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_mn_anterior: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_mn_actual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_div_anterior: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_div_actual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprecmes_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprecmes_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'invent_mov_mediospropios'
  });
};
