/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enlaces_contables', {
    id_enlace: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_area: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_generico: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_cuenta_aft_uso_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_aft_uso_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_aft_alm_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_aft_alm_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_dep_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_dep_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_sobrante_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_sobrante_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_faltante_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_faltante_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_gastodep_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_gastodep_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_gastovr_mn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    id_cuenta_gastovr_div: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'enlaces_contables'
  });
};
