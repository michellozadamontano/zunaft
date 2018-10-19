/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('histinvent_mov_mediospropios', {
    id_medio: {
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
        model: 'histmovimientos',
        key: 'id_movimiento'
      }
    },
    ejercicio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'histmovimientos',
        key: 'ejercicio'
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
      allowNull: true,
      references: {
        model: 'moneda',
        key: 'id_moneda'
      }
    },
    id_moneda_actual: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'moneda',
        key: 'id_moneda'
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
    tableName: 'histinvent_mov_mediospropios'
  });
};
