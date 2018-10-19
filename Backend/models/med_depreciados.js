/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('med_depreciados', {
    id_depre: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    depre_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depre_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    id_ccostoZUN: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    importe_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    importe_div: {
      type: DataTypes.DECIMAL,
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
    tasa: {
      type: "DOUBLE",
      allowNull: false
    },
    fechabaja: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'med_depreciados'
  });
};
